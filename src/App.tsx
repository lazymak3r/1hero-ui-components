import classes from './App.module.scss';
import { AppRoutes } from './AppRoutes';

export const App = () => {
  return (
    <div className={classes.container}>
      <AppRoutes />
    </div>
  );
};
