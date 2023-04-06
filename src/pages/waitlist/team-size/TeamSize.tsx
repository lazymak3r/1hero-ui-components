import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './TeamSize.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { teamSize as teamSizeValues } from '../constants';

interface IFormType {
  teamSize: string;
}

export const TeamSize = () => {
  const navigate = useNavigate();
  const { teamSize, updateStore } = useWaitListStore();
  const { register, handleSubmit, formState: { isValid } } = useForm<IFormType>({ defaultValues: { teamSize } });

  const goBack = () => navigate(-1);

  const onSubmit = ({ teamSize }: IFormType) => {
    updateStore('teamSize', teamSize);
    navigate('/budget');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={teamSizeValues['6 - 20']}
                  label={teamSizeValues['1']}
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={teamSizeValues['21 - 50']}
                  label={teamSizeValues['2']}
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={teamSizeValues['More than 50']}
                  label={teamSizeValues['3']}
                  {...register('teamSize', { required: true })}
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
