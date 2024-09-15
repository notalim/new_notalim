import { ReactNode } from "react";

export interface ComponentCardProps {
    title: string;
    description: string;
    githubLink: string;
    children: ReactNode;
    buttons?: { label: string; onClick: () => void }[];
    rounded?: boolean;
    className?: string;
    input?: ReactNode;
}
