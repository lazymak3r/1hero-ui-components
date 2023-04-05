import React, { ForwardedRef, useCallback, useState } from 'react';
import classNames from 'classnames';

import classes from './AppInput.module.scss';
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/clear.svg';
import { ReactComponent as EyeClosedIcon } from '../../assets/icons/eyeClosed.svg';

export type AppInputType = 'text' | 'password' | 'number' | 'email';
export type AppInputVariant = 'white';

type InputProps = {
  id?: string;
  icon?: React.ReactNode;
  value?: string;
  disable?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  asterisk?: boolean;
  className?: string;
  clearable?: boolean;
  autoFocus?: boolean
  placeholder?: string;
  invalidMessage?: string;
  onClear?: () => void;
  type?: AppInputType;
  variant?: AppInputVariant;
  name?: string;
  showPasswordEye?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AppInput = React.forwardRef(
  (
    {
      id,
      icon,
      name,
      value,
      onBlur,
      disable,
      invalid,
      onClear,
      onChange,
      asterisk,
      readOnly,
      className,
      clearable,
      autoFocus,
      placeholder,
      invalidMessage,
      showPasswordEye,
      type = 'text',
      variant = 'white'
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [focused, setFocused] = useState(false);
    const [inputType, setInputType] = useState(type);

    const wrapperClassName = classNames(classes.inputWrapper, className);

    const inputClassName = classNames(
      classes.inputContainer,
      classes[variant],
      {
        [classes.disabled]: disable
      },
      {
        [classes.invalid]: invalid
      },
      {
        [classes.focused]: focused
      },
      {
        [classes.clearable]: clearable
      },
      {
        [classes.noPlaceholder]: !placeholder
      }
    );

    const onClearHandler = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        if (name && onChange) {
          (document.querySelector(`[name=${name}]`) as HTMLInputElement).value = '';
          // @ts-ignore
          onChange({ target: { name: name || '', value: '' } });
        }
        if (onClear) {
          onClear();
        }
      },
      [name, onChange, onClear]
    );

    const onFocusHandler = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
    }, []);

    const onBlurHandler = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) {
          onBlur(event);
        }
        setFocused(false);
      },
      [onBlur]
    );

    const onTogglePassword = useCallback((e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setInputType((prev) => (prev === 'text' ? 'password' : 'text'));
    }, []);

    return (
      <div className={wrapperClassName}>
        <label
          // tabIndex={0}
          className={inputClassName}
          data-testid={'input'}
        >
          {icon && <div className={classes.icon}>{icon}</div>}
          <div className={classes.inputMain}>
            <input
              id={id}
              ref={ref}
              name={name}
              type={inputType}
              value={value}
              autoFocus={autoFocus}
              readOnly={readOnly}
              disabled={disable}
              className={classes.input}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
            />
            {placeholder && (
              <span className={classes.floatingPlaceholder}>
                {placeholder}
                {!!asterisk && <span className={classes.asterisk}> * </span>}
              </span>
            )}
            {type !== 'password' && clearable && (
              <div
                aria-hidden
                className={classes.clearIcon}
                onClick={onClearHandler}
                data-testid={'clear-icon'}
              >
                <ClearIcon />
              </div>
            )}
            {type === 'password' && showPasswordEye && (
              <div
                aria-hidden
                className={classes.eyeIcon}
                onClick={onTogglePassword}
                data-testid={'eye-icon'}
              >
                {inputType === 'password' ? <EyeIcon /> : <EyeClosedIcon />}
              </div>
            )}
          </div>
        </label>
        {!!invalid && !!invalidMessage && (
          <div className={classes.invalidMessage}>{invalidMessage}</div>
        )}
      </div>
    );
  }
);

AppInput.defaultProps = {
  type: 'text',
  variant: 'white'
} as InputProps;
