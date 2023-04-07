import React, { ForwardedRef, useCallback, useState } from 'react';
import classNames from 'classnames';

import classes from './AppTextarea.module.scss';
import { ReactComponent as ClearIcon } from '../../assets/icons/clear.svg';

export type AppTextareaVariant = 'white';

type InputProps = {
  id?: string;
  rows?: number;
  cols?: number;
  icon?: React.ReactNode;
  value?: string;
  disable?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  asterisk?: boolean;
  className?: string;
  inputClassName?: string;
  clearable?: boolean;
  autoFocus?: boolean
  placeholder?: string;
  invalidMessage?: string;
  onClear?: () => void;
  variant?: AppTextareaVariant;
  name?: string;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const AppTextarea = React.forwardRef(
  (
    {
      id,
      rows,
      cols,
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
      inputClassName,
      invalidMessage,
      variant = 'white'
    }: InputProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const [focused, setFocused] = useState(false);

    const wrapperClassName = classNames(classes.inputWrapper, className);

    const labelClassName = classNames(
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
          (document.querySelector(`[name=${name}]`) as HTMLTextAreaElement).value = '';
          // @ts-ignore
          onChange({ target: { name: name || '', value: '' } });
        }
        if (onClear) {
          onClear();
        }
      },
      [name, onChange, onClear]
    );

    const onFocusHandler = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
      setFocused(true);
    }, []);

    const onBlurHandler = useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement>) => {
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
    }, []);

    return (
      <div className={wrapperClassName}>
        <label
          // tabIndex={0}
          className={labelClassName}
          data-testid={'input'}
        >
          {icon && <div className={classes.icon}>{icon}</div>}
          <div className={classes.inputMain}>
            <textarea
              id={id}
              ref={ref}
              name={name}
              value={value}
              autoFocus={autoFocus}
              readOnly={readOnly}
              disabled={disable}
              className={classNames(classes.input, inputClassName)}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              rows={rows}
              cols={cols}
            ></textarea>
            {placeholder && (
              <span className={classes.floatingPlaceholder}>
                {placeholder}
                {!!asterisk && <span className={classes.asterisk}> * </span>}
              </span>
            )}
            {clearable && (
              <div
                aria-hidden
                className={classes.clearIcon}
                onClick={onClearHandler}
                data-testid={'clear-icon'}
              >
                <ClearIcon />
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

AppTextarea.defaultProps = {
  rows: 10,
  type: 'text',
  variant: 'white'
} as InputProps;
