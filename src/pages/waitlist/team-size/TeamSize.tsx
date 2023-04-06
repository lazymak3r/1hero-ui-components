import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './TeamSize.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { teamSize as teamSizeValues } from '../constants';

interface IFormType {
  teamSize: string;
}

export const TeamSize = () => {
  const navigate = useNavigate();
  const { teamSize, updateStore } = useWaitListStore();
  const { register } = useForm<IFormType>({ defaultValues: { teamSize } });

  const onSubmit = ({ teamSize }: IFormType) => {
    updateStore('teamSize', teamSize);
    setTimeout(() => {
      navigate('/budget');
    }, 200);
  };

  return (
    <motion.div {...fadeIn}>
      <form>
        <div className={classes.wrapper}>
          <h2
            className={classes.question}
          >
            How many people are in your customer support team?
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={teamSizeValues['1 - 5']}
                  label={teamSizeValues['0']}
                  onClick={(event) => onSubmit({ teamSize: event.currentTarget.value })}
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={teamSizeValues['6 - 20']}
                  label={teamSizeValues['1']}
                  onClick={(event) => onSubmit({ teamSize: event.currentTarget.value })}
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={teamSizeValues['21 - 50']}
                  label={teamSizeValues['2']}
                  onClick={(event) => onSubmit({ teamSize: event.currentTarget.value })}
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={teamSizeValues['More than 50']}
                  label={teamSizeValues['3']}
                  onClick={(event) => onSubmit({ teamSize: event.currentTarget.value })}
                  {...register('teamSize', { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
