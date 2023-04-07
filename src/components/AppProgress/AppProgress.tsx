import React from 'react';
import classNames from 'classnames';

import classes from './AppProgress.module.scss';

interface IProgressProps {
  value: number;
  variant: 'primary';
  className?: string;
  shouldShowCompletedState: boolean,
  wrapperClassName?: string;
}

export const AppProgress = ({
                              value,
                              variant,
                              className,
                              wrapperClassName,
                              shouldShowCompletedState
                            }: IProgressProps) => {
  return (
    <div className={classNames(classes.wrapper, wrapperClassName)}>
      <div className={classNames([
        classes.progress, className, classes[variant],
        { [classes.completed]: shouldShowCompletedState && value >= 100 }
      ])}>
        <div className={classes.progressInner} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

AppProgress.defaultProps = {
  value: 0,
  variant: 'primary'
} as IProgressProps;
