import { useEffect, useRef, useState } from "react";
import { P5SketchProps } from "./types";

const P5Sketch: React.FC<P5SketchProps> = ({
    backgroundColor = "#739786",
    pixelColor = "#384a42",
}) => {
    const sketchRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (sketchRef.current) {
                const width = sketchRef.current.offsetWidth;
                const height = sketchRef.current.offsetHeight;
                setDimensions({ width, height });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        let p5Instance: any;

        const loadP5 = async () => {
            console.log("Loading P5...");
            const p5 = await import('p5');
            
            class Sketch {
                p: any;
                pg1: any;
                canvas: any;
                bufferCanvas: any;
                img: any;
                imgLoaded: boolean = false;
                bufferDensity: number = 0;
                bufferX: number = 0;
                bufferY: number = 0;
                tilesX: number = 50;
                tilesY: number = 50;
                tileW: number = 0;
                tileH: number = 0;
                speed: number = 6;
                minimumSize: number = 0;
                displayHeightRatio: number = 1;
                canvasHeight: number = 0;
                canvasWidth: number = 0;
                imageSize: number = 0;

                constructor(p: any) {
                    this.p = p;
                    p.preload = this.preload.bind(this);
                    p.setup = this.setup.bind(this);
                    p.draw = this.draw.bind(this);
                    p.windowResized = this.windowResized.bind(this);
                }

                preload() {
                    this.img = this.p.loadImage("/sgb.png", 
                        () => {
                            console.log("Image loaded successfully");
                            this.imgLoaded = true;
                        },
                        (err: any) => {
                            console.error("Failed to load image:", err);
                            this.imgLoaded = false;
                        }
                    );
                }

                calculateGridSize() {
                    this.canvasHeight = this.p.height;
                    this.canvasWidth = this.p.width;
                    let ratio = this.canvasWidth / this.canvasHeight;
                    if (ratio > 1) {
                        this.bufferY = 10;
                        this.bufferX = this.p.floor(((this.tilesX + this.bufferY * 2) * ratio - this.tilesX) / 2);
                    } else {
                        this.bufferX = 0;
                        this.bufferY = this.p.floor(((this.tilesY + this.bufferX * 2) / ratio - this.tilesY) / 2);
                    }
                }

                setup() {
                    console.log("Setup function called");
                    let canvas = this.p.createCanvas(dimensions.width, dimensions.height);
                    canvas.parent(sketchRef.current!);
                    this.calculateGridSize();
                    this.p.pixelDensity(1);
                    
                    // Calculate image size based on canvas dimensions
                    this.imageSize = Math.min(this.p.width, this.p.height) * 0.2; 
                    
                    // Adjust number of tiles based on canvas size
                    this.tilesX = Math.floor(this.p.width / 6); // Adjusted for larger tiles
                    this.tilesY = Math.floor(this.p.height / 6);
                    
                    this.pg1 = this.p.createGraphics(this.tilesX, this.tilesY, this.p.WEBGL);
                    this.canvas = this.p.createGraphics(this.tilesX, this.tilesY, this.p.WEBGL);
                    this.bufferCanvas = this.p.createGraphics(this.p.width, this.p.height);
                    this.p.frameRate(60);
                    this.tileW = this.p.width / this.tilesX;
                    this.tileH = this.p.height / this.tilesY;
                    this.drawBuffer();
                    console.log("Setup completed");
                }

                drawBuffer() {
                    this.bufferCanvas.background(backgroundColor);
                    this.bufferCanvas.fill(pixelColor);
                    this.bufferCanvas.noStroke();
                    for (let y = 0; y < this.tilesY + this.bufferY * 2; y++) {
                        for (let x = 0; x < this.tilesX + this.bufferX * 2; x++) {
                            let xPos = x * this.tileW;
                            let yPos = y * this.tileH;
                            if (x <= this.bufferX || x >= this.tilesX + this.bufferX || y <= this.bufferY || y >= this.tilesY + this.bufferY) {
                                this.bufferCanvas.push();
                                this.bufferCanvas.translate(xPos + 4, yPos + 4);
                                this.bufferCanvas.ellipse(0, 0, this.bufferDensity, this.bufferDensity);
                                this.bufferCanvas.pop();
                            }
                        }
                    }
                }

                draw() {
                    try {
                        this.p.background(backgroundColor);
                        
                        if (this.imgLoaded && this.img.width > 0) {
                            // Clear the main canvas
                            this.p.clear();
                            this.p.background(backgroundColor);

                            // Center the flower
                            this.p.push();
                            this.p.translate(this.p.width / 2, this.p.height / 2);

                            this.pg1.clear();
                            this.pg1.background(220);
                            this.pg1.push();
                            this.pg1.imageMode(this.p.CENTER);
                            this.img.resize(this.imageSize, 0); // Use dynamic image size
                            this.pg1.rotateY(this.p.radians(this.p.millis() * this.speed * 0.01));
                            this.pg1.image(this.img, 0, 0);
                            this.pg1.pop();

                            this.canvas.imageMode(this.p.CENTER);
                            this.canvas.background(0);
                            this.canvas.push();
                            this.canvas.image(this.pg1, 0, 0);
                            this.canvas.pop();
                            this.canvas.loadPixels();

                            // Calculate the offset to center the drawing
                            let offsetX = -this.tilesX * this.tileW / 2;
                            let offsetY = -this.tilesY * this.tileH / 2;

                            this.p.noStroke();
                            for (let y = 0; y < this.tilesY; y++) {
                                for (let x = 0; x < this.tilesX; x++) {
                                    let xPos = x * this.tileW + offsetX;
                                    let yPos = y * this.tileH + offsetY;
                                    let i = 4 * (y * this.canvas.width + x);
                                    let r = 255 - this.canvas.pixels[i];
                                    let g = 255 - this.canvas.pixels[i + 1];
                                    let b = 255 - this.canvas.pixels[i + 2];
                                    let c = this.p.color(r, g, b);
                                    let brightnessVal = this.p.brightness(c);
                                    brightnessVal = brightnessVal < 50 ? 0 : brightnessVal * 2.5;
                                    let alphaVal = this.p.map(brightnessVal, 0, 255, 0, 255);
                                    this.p.fill(this.p.red(pixelColor), this.p.green(pixelColor), this.p.blue(pixelColor), alphaVal);
                                    this.p.rect(xPos, yPos, this.tileW, this.tileH);
                                }
                            }

                            this.p.pop();
                        } else {
                            // Display loading message or spinner
                            this.p.fill(255);
                            this.p.textAlign(this.p.CENTER, this.p.CENTER);
                            this.p.text("Loading...", this.p.width / 2, this.p.height / 2);
                        }
                    } catch (error) {
                        console.error("Error in draw function:", error);
                    }
                }

                windowResized() {
                    this.p.resizeCanvas(dimensions.width, dimensions.height);
                    this.calculateGridSize();
                    this.imageSize = Math.min(this.p.width, this.p.height) * 0.6; // Recalculate image size
                    this.tilesX = Math.floor(this.p.width / 6);
                    this.tilesY = Math.floor(this.p.height / 6);
                    this.tileW = this.p.width / this.tilesX;
                    this.tileH = this.p.height / this.tilesY;
                    this.pg1 = this.p.createGraphics(this.tilesX, this.tilesY, this.p.WEBGL);
                    this.canvas = this.p.createGraphics(this.tilesX, this.tilesY, this.p.WEBGL);
                    this.bufferCanvas = this.p.createGraphics(this.p.width, this.p.height);
                    this.drawBuffer();
                }
            }

            p5Instance = new p5.default((p: any) => new Sketch(p), sketchRef.current);
        };

        if (dimensions.width > 0 && dimensions.height > 0) {
            console.log("Dimensions set, loading P5", dimensions);
            loadP5();
        }

        return () => {
            if (p5Instance) {
                console.log("Removing P5 instance");
                p5Instance.remove();
            }
        };
    }, [backgroundColor, pixelColor, dimensions]);

    return <div ref={sketchRef} style={{ width: '100%', height: '100%', backgroundColor: backgroundColor }} />;
};

export default P5Sketch;
