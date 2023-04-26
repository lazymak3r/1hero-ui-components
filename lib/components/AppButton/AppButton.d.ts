import React from 'react';
import './index.css';
import './appButton.css';
export type AppButtonSize = 'small' | 'default';
export type AppButtonType = 'button' | 'submit' | 'reset';
export type AppButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';
type ButtonProps = {
    id?: string;
    text?: string;
    type?: AppButtonType;
    disable?: boolean;
    size?: AppButtonSize;
    variant?: AppButtonVariant;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: (e: any) => void;
    className?: string;
};
declare const AppButton: {
    ({ id, text, type, disable, size, variant, leftIcon, rightIcon, onClick, className }: ButtonProps): JSX.Element;
    defaultProps: ButtonProps;
};
export default AppButton;
