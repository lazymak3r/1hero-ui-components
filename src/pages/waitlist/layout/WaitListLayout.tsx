import { Outlet } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';
import classes from './WaitListLayout.module.scss';

export const WaitListLayout = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt={'1hero'} width={209} height={98} />
        </div>
        <h1 className={classes.title}>Join to Waitlist</h1>
        <Outlet />
      </div>
    </div>
  );
};
