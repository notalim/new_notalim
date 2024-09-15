export interface TypewriterProps {
    phrases: string[];
    darkMode?: boolean;
}

export interface CustomInputProps {
    onSubmit: (value: string) => void;
    placeholder?: string;
    blinkSpeed?: number;
    value?: string;
    onChange?: (value: string) => void;
    darkMode?: boolean;
}
