import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import classes from './JoinedWaitlist.module.scss';
import confettiAnimation from './confetti.json';
import { fadeIn } from '../../utils/routeAnimations';
import { ROUTES } from '../../components/AppRoutes/constants';
import { AppButton } from '../../components/AppButton/AppButton';
import { useWaitListStore } from '../../store/waitlistStore';

export const JoinedWaitList = () => {
  const navigate = useNavigate();
  const { email } = useWaitListStore();

  useEffect(() => {
    if (!email) {
      navigate(ROUTES.SIGNUP);
    }
  }, []);

  return (
    <motion.div {...fadeIn}>
      <div className={classes.animationContainer}>
        <Lottie
          loop={true}
          renderer={'svg'}
          animationData={confettiAnimation}
          style={{ height: '100%' }}
        />
      </div>
      <div className={classes.mainPage}>
        <div className={classes.wrapper}>
          <div className={classes.logo}>
            <img src={logo} alt={'1hero'} width={209} height={98} />
          </div>
          <h1 className={classes.title}>
            Lucky You!
          </h1>
          <p className={classes.text}>
            You've reserved your spot to be among the first to try 1hero.ai.
            Remember, we'll reach out to you via the email and phone number you provided earlier in the form.
            Stay tuned – you'll hear from us within the next few days!
          </p>
          <AppButton text={'Back to home'} variant={'primary'}
                     onClick={() => location.href = 'https://www.1hero.com'} />
        </div>
      </div>
    </motion.div>
  );
};
