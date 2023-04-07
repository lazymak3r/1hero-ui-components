import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './DailyEmailsCount.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { ROUTES } from '../../../components/AppRoutes/constants';
import { useForm } from 'react-hook-form';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { dailyEmailsCount as dailyEmailsCountValues } from '../constants';

interface IFormType {
  dailyEmailsCount: string;
}

export const DailyEmailsCount = () => {
  const navigate = useNavigate();
  const { dailyEmailsCount, updateStore, addToWaitList } = useWaitListStore();
  const { register } = useForm<IFormType>({ defaultValues: { dailyEmailsCount } });

  const onSubmit = async ({ dailyEmailsCount }: IFormType) => {
    updateStore('dailyEmailsCount', dailyEmailsCount);
    await addToWaitList();
    setTimeout(() => {
      navigate(ROUTES.SIGNUP_EMAIL_SERVICES);
    }, 200);
  };

  return (
    <motion.div {...fadeIn}>
      <form>
        <div className={classes.wrapper}>
          <h2
            className={classes.question}
          >
            How many emails do you receive daily?
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={dailyEmailsCountValues['Up to 100']}
                  label={dailyEmailsCountValues['0']}
                  onClick={(event) => onSubmit({ dailyEmailsCount: event.currentTarget.value })}
                  {...register('dailyEmailsCount', { required: true })}
                />
                <AppRadioOption
                  value={dailyEmailsCountValues['Up to 1,000']}
                  label={dailyEmailsCountValues['1']}
                  onClick={(event) => onSubmit({ dailyEmailsCount: event.currentTarget.value })}
                  {...register('dailyEmailsCount', { required: true })}
                />
                <AppRadioOption
                  value={dailyEmailsCountValues['Up to 10,000']}
                  label={dailyEmailsCountValues['2']}
                  onClick={(event) => onSubmit({ dailyEmailsCount: event.currentTarget.value })}
                  {...register('dailyEmailsCount', { required: true })}
                />
                <AppRadioOption
                  value={dailyEmailsCountValues['More']}
                  label={dailyEmailsCountValues['3']}
                  onClick={(event) => onSubmit({ dailyEmailsCount: event.currentTarget.value })}
                  {...register('dailyEmailsCount', { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
