import React from 'react';
import classNames from 'classnames';
import classes from './AppButton.module.scss';

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

export const AppButton = ({
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
    classes.button,
    classes[size],
    classes[variant],
    {
      [classes.disabled]: disable
    },
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

AppButton.defaultProps = {
  type: 'button',
  size: 'default',
  variant: 'primary'
} as ButtonProps;
