import { Navigate } from 'react-router-dom';

import { ROUTES } from '../../components/AppRoutes/constants';

export const NotFound = () => {
  return <Navigate to={ROUTES.SIGNUP} replace={true} />;
};
