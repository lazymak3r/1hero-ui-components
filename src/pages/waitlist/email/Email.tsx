import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './Email.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppInput } from '../../../components/AppInput/AppInput';
import { AppButton } from '../../../components/AppButton/AppButton';
import { useWaitListStore } from '../../../store/waitlistStore';

interface IFormType {
  email: string;
}

export const Email = () => {
  const navigate = useNavigate();
  const { email, updateStore } = useWaitListStore();
  const { register, handleSubmit, formState: { isValid } } = useForm<IFormType>({ defaultValues: { email } });

  const goBack = () => navigate(-1);

  const onSubmit = ({ email }: IFormType) => {
    updateStore('email', email);
    navigate('/team-size');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppInput
                  asterisk={true}
                  autoFocus={true}
                  placeholder={'Email'}
                  className={classes.phoneField}
                  {...register('email', { required: true })}
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
