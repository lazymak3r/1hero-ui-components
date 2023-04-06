import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './PhoneNumber.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppInput } from '../../../components/AppInput/AppInput';
import { AppButton } from '../../../components/AppButton/AppButton';
import { useWaitListStore } from '../../../store/waitlistStore';
import { PHONE_REGEX, VALIDATION_MESSAGES } from '../../../utils/constants';

interface IFormType {
  phoneNumber?: string;
}

export const PhoneNumber = () => {
  const navigate = useNavigate();
  const { phoneNumber, updateStore } = useWaitListStore();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm<IFormType>({ mode: 'onChange', defaultValues: { phoneNumber } });

  const onSubmit = ({ phoneNumber }: IFormType) => {
    updateStore('phoneNumber', phoneNumber);
    navigate('/email');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppInput
                  autoFocus={true}
                  invalid={!!errors['phoneNumber']}
                  invalidMessage={errors['phoneNumber']?.message}
                  placeholder={'Phone Number (Optional)'}
                  className={classes.phoneField}
                  {...register('phoneNumber', {
                    pattern: { value: PHONE_REGEX, message: VALIDATION_MESSAGES.PHONE_FORMAT }
                  })}
                />
                <AppButton type={'submit'} text={'Next'} disable={!isValid} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
