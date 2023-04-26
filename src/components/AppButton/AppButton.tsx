import React from 'react';
import classNames from 'classnames';
import './index.css'
import './appButton.css';

export type AppButtonSize = 'small' | 'default';
export type AppButtonType = 'button' | 'submit' | 'reset';
export type AppButtonVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger';

type ButtonProps = {
    id?: string;
    text?: string;
    type?: AppButtonType;
    disable?: boolean;
    size?: AppButtonSize;
    variant?: AppButtonVariant;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    // eslint-disable-next-line no-unused-vars
    onClick?: (e: any) => void;
    className?: string;
};

const AppButton = ({
    id,
    text,
    type = 'button',
    disable,
    size = 'default',
    variant = 'primary',
    leftIcon,
    rightIcon,
    onClick,
    className
}: ButtonProps) => {
    const buttonClassName = classNames(
        'button',
        `${size}`,
        `${variant}`,
        // {
        //     [classes.disabled]: disable
        // },
        className
    );

    return (
        <button
            id={id}
            type={type}
            className={buttonClassName}
            disabled={disable}
            onClick={onClick}
            data-testid={'button'}
        >
            {!!leftIcon && <span data-testid={'left-icon'}>{leftIcon}</span>}
            {!!text && <span>{text}</span>}
            {!!rightIcon && <span data-testid={'right-icon'}>{rightIcon}</span>}
        </button>
    );
};

export default AppButton;

AppButton.defaultProps = {
    type: 'button',
    size: 'default',
    variant: 'primary'
} as ButtonProps;


