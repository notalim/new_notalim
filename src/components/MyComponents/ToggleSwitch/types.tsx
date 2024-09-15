import { ReactNode } from "react";

export interface ToggleSwitchProps {
    isOn: boolean;
    onToggle: () => void;
    size?: number;
    lightIcon?: ReactNode;
    darkIcon?: ReactNode;
    isVertical?: boolean;
}
