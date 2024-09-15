export interface DotPatternProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    className?: string;
    dotColor?: string;
    pattern?: "dot" | "+" | "x";
    patternSizeDivisor?: number;
    spacingFactor?: number;
}
