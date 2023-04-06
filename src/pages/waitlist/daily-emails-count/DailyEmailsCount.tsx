import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './DailyEmailsCount.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { dailyEmailsCount as dailyEmailsCountValues } from '../constants';

interface IFormType {
  dailyEmailsCount: string;
}

export const DailyEmailsCount = () => {
  const navigate = useNavigate();
  const { dailyEmailsCount, updateStore } = useWaitListStore();
  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm<IFormType>({ defaultValues: { dailyEmailsCount } });

  const goBack = () => navigate(-1);

  const onSubmit = ({ dailyEmailsCount }: IFormType) => {
    updateStore('dailyEmailsCount', dailyEmailsCount);
    navigate('/email-service');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('dailyEmailsCount', { required: true })}
                />
                <AppRadioOption
                  value={dailyEmailsCountValues['Up to 1,000']}
                  label={dailyEmailsCountValues['1']}
                  {...register('dailyEmailsCount', { required: true })}
                />
                <AppRadioOption
                  value={dailyEmailsCountValues['Up to 10,000']}
                  label={dailyEmailsCountValues['2']}
                  {...register('dailyEmailsCount', { required: true })}
                />
                <AppRadioOption
                  value={dailyEmailsCountValues['More']}
                  label={dailyEmailsCountValues['3']}
                  {...register('dailyEmailsCount', { required: true })}
                />
                <AppButton type={'submit'} text={'Next'} disable={!isValid} />
                <AppButton type={'button'} text={'Back'} variant={'secondary'} onClick={goBack} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
