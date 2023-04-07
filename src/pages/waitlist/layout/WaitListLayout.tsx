import { useEffect, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';
import classes from './WaitListLayout.module.scss';
import { ROUTES } from '../../../components/AppRoutes/constants';
import { AppProgress } from '../../../components/AppProgress/AppProgress';
import { useWaitListStore } from '../../../store/waitlistStore';

const firstStep = [ROUTES.SIGNUP_EMAIL, ROUTES.SIGNUP_PHONE];
const secondStep = [ROUTES.SIGNUP_TEAM_SIZE, ROUTES.SIGNUP_BUDGET, ROUTES.SIGNUP_BUSINESS_INDUSTRY];
const thirdStep = [ROUTES.SIGNUP_DAILY_EMAILS_COUNT, ROUTES.SIGNUP_EMAIL_SERVICES, ROUTES.SIGNUP_HELPDESK];
const forthStep = [ROUTES.SIGNUP_SOP];
const allSteps = [...firstStep, ...secondStep, ...thirdStep, ...forthStep];

export const WaitListLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { email } = useWaitListStore();

  const progress = useMemo(() => {
    const totalSteps = allSteps.length - 1;
    const index = allSteps.findIndex(p => p === pathname);
    if (index === -1) return 0;
    const percent = (index / totalSteps) * 100;
    return percent;
  }, [pathname]);

  const title = useMemo(() => {
    if (firstStep.includes(pathname)) {
      return 'Tell Us How to Reach You';
    } else if (secondStep.includes(pathname)) {
      return 'Let Us Learn About Your Business';
    } else if (thirdStep.includes(pathname)) {
      return 'Tell Us About Your CS Operations';
    } else if (forthStep.includes(pathname)) {
      return 'Lastly, Copy & Paste Your SOP Or FAQ';
    }
  }, [pathname]);

  useEffect(() => {
    if (!email) {
      navigate(ROUTES.SIGNUP);
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt={'1hero'} width={209} height={98} />
        </div>
        <h1 className={classes.title}>{title}</h1>
        <AppProgress value={progress} wrapperClassName={classes.progress} />
        <Outlet />
      </div>
    </div>
  );
};
