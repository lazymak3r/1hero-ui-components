import React, { PropsWithChildren, useEffect } from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './AppModal.module.scss';
import { fadeIn, fadeInOut } from '../../utils/routeAnimations';
import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/clear.svg';
import { ReactComponent as EyeClosedIcon } from '../../assets/icons/eyeClosed.svg';


interface IModalProps extends PropsWithChildren {
  width: string | number,
  isVisible: boolean;
  closeIcon?: boolean;
  onClose: (e: React.MouseEvent | KeyboardEvent) => void;
}

export const AppModal: React.FC<IModalProps> = ({
                                                  width,
                                                  isVisible,
                                                  children,
                                                  closeIcon,
                                                  onClose
                                                }) => {

  const onCloseHandler = (e: React.MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose(e);
  };

  const prevent = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 27 || e.code === 'Escape') {
      onCloseHandler(e);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  return (
    createPortal((
      <AnimatePresence>
        {isVisible &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={classes.modalWrapper}
            transition={{ duration: 0.125 }}
          >
            <motion.div
              {...fadeInOut}
              className={classes.overlay}
              onClick={onCloseHandler}
            >
              <div className={classes.container}>
                <div
                  onClick={prevent}
                  style={{ width: width }}
                  className={classNames([classes.mainModal, { [classes.withCloseIcon]: closeIcon }])}
                >
                  {closeIcon &&
                    <span className={classes.closeIcon} onClick={onCloseHandler}><ClearIcon fill={'red'} /></span>}
                  <div className={classes.modalMain}>{children}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    ), document.body)

  );
};

AppModal.defaultProps = {
  closeIcon: true,
  isVisible: false
} as IModalProps;
