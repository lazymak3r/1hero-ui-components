import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './TeamSize.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { wrapInsideSpan } from '../../../utils/fns';
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
            {wrapInsideSpan('How many people are in your customer support team?', {
              className: classes.questionChar
            })}
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={'1'}
                  label={teamSizeValues['1']}
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={'2'}
                  label={teamSizeValues['2']}
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={'3'}
                  label={teamSizeValues['3']}
                  {...register('teamSize', { required: true })}
                />
                <AppRadioOption
                  value={'4'}
                  label={teamSizeValues['4']}
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
