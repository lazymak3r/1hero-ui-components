import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './Sop.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppTextarea } from '../../../components/AppTextarea/AppTextarea';
import { useWaitListStore } from '../../../store/waitlistStore';
import { wrapInsideSpan } from '../../../utils/fns';

interface IFormType {
  sop: string;
}

export const Sop = () => {
  const navigate = useNavigate();
  const { sop, updateStore } = useWaitListStore();
  const { register, handleSubmit, formState: { isValid } } = useForm<IFormType>({ defaultValues: { sop } });

  const goBack = () => navigate(-1);

  const onSubmit = ({ sop }: IFormType) => {
    updateStore('sop', sop);
    navigate('/team-size');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.wrapper}>
          <h2
            className={classes.question}
          >
            {wrapInsideSpan('Include your SOP/FAQ', {
              className: classes.questionChar
            })}
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppTextarea
                  rows={10}
                  asterisk={true}
                  autoFocus={true}
                  placeholder={'SOP/FAQ'}
                  className={classes.phoneField}
                  {...register('sop', { required: true })}
                />
                <div className={classes.actions}>
                  <AppButton type={'button'} text={'Back'} variant={'secondary'} onClick={goBack}
                             className={classes.action} />
                  <AppButton type={'submit'} text={'Next'} disable={!isValid} className={classes.action} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
