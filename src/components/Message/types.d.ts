export interface TextProps {
    visibleState: boolean;
}

export interface MessageProps extends TextProps {
    children: string;
}