import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './Budget.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { budget as budgetValues } from '../constants';

interface IFormType {
  budget: string;
}

export const Budget = () => {
  const navigate = useNavigate();
  const { budget, updateStore } = useWaitListStore();
  const { register, handleSubmit, formState: { isValid } } = useForm<IFormType>({ defaultValues: { budget } });

  const goBack = () => navigate(-1);

  const onSubmit = ({ budget }: IFormType) => {
    updateStore('budget', budget);
    navigate('/business-industry');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.wrapper}>
          <h2
            className={classes.question}
          >
            What is your monthly customer support budget (including salary, contracts, and software)?
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={budgetValues['0 - $1K']}
                  label={budgetValues['0']}
                  {...register('budget', { required: true })}
                />
                <AppRadioOption
                  value={budgetValues['$1K - $10K']}
                  label={budgetValues['1']}
                  {...register('budget', { required: true })}
                />
                <AppRadioOption
                  value={budgetValues['$10K - $100K']}
                  label={budgetValues['2']}
                  {...register('budget', { required: true })}
                />
                <AppRadioOption
                  value={budgetValues['$100K+']}
                  label={budgetValues['3']}
                  {...register('budget', { required: true })}
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
