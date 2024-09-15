export interface BadgeProps {
    name: string;
    darkMode?: boolean;
}

export interface ScrollingBadgesProps {
    badges: BadgeProps[];
    rows?: number;
    isDark?: boolean;
    badgeWidth?: number;
    isScrolling?: boolean;
    scrollSpeed?: number;
    darkMode?: boolean;
}
