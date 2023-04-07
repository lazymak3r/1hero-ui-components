import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './Budget.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { ROUTES } from '../../../components/AppRoutes/constants';
import { useForm } from 'react-hook-form';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { budget as budgetValues } from '../constants';

interface IFormType {
  budget: string;
}

export const Budget = () => {
  const navigate = useNavigate();
  const { budget, updateStore, addToWaitList } = useWaitListStore();
  const { register } = useForm<IFormType>({ defaultValues: { budget } });

  const onSubmit = async ({ budget }: IFormType) => {
    updateStore('budget', budget);
    await addToWaitList();
    setTimeout(() => {
      navigate(ROUTES.WAITLIST_BUSINESS_INDUSTRY);
    }, 200);
  };

  return (
    <motion.div {...fadeIn}>
      <form>
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
                  onClick={(event) => onSubmit({ budget: event.currentTarget.value })}
                  {...register('budget', { required: true })}
                />
                <AppRadioOption
                  value={budgetValues['$1K - $10K']}
                  label={budgetValues['1']}
                  onClick={(event) => onSubmit({ budget: event.currentTarget.value })}
                  {...register('budget', { required: true })}
                />
                <AppRadioOption
                  value={budgetValues['$10K - $100K']}
                  label={budgetValues['2']}
                  onClick={(event) => onSubmit({ budget: event.currentTarget.value })}
                  {...register('budget', { required: true })}
                />
                <AppRadioOption
                  value={budgetValues['$100K+']}
                  label={budgetValues['3']}
                  onClick={(event) => onSubmit({ budget: event.currentTarget.value })}
                  {...register('budget', { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
