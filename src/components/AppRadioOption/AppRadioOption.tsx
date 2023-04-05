import React, { ForwardedRef, useEffect, useRef } from 'react';
import classNames from 'classnames';

import classes from './AppRadioOption.module.scss';

type InputProps = {
  id?: string;
  label?: string,
  value?: string | number;
  disable?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  className?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AppRadioOption = React.forwardRef(
  (
    {
      id,
      name,
      label,
      value,
      disable,
      invalid,
      onChange,
      readOnly,
      className
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const wrapperClassName = classNames(classes.inputWrapper, className);

    const inputClassName = classNames(
      classes.inputContainer,
      {
        [classes.disabled]: disable
      },
      {
        [classes.invalid]: invalid
      }
    );

    return (
      <div className={wrapperClassName}>
        <label className={inputClassName}>
            <span className={classes.radioWrapper}>
              <input
                id={id}
                ref={ref}
                name={name}
                type={'radio'}
                value={value}
                readOnly={readOnly}
                disabled={disable}
                className={classes.input}
                onChange={onChange}
              />
              <span className={classes.radio}></span>
            </span>
          {!!label && <span className={classes.label}>{label}</span>}
        </label>
      </div>
    );
  }
);
