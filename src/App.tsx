import classes from './App.module.scss';
import { AppRoutes } from './components/AppRoutes/AppRoutes';

export const App = () => {
  return (
    <div className={classes.container}>
      <AppRoutes />
    </div>
  );
};
