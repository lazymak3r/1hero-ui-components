import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './Email.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { ROUTES } from '../../../components/AppRoutes/constants';
import { useForm } from 'react-hook-form';
import { AppInput } from '../../../components/AppInput/AppInput';
import { AppButton } from '../../../components/AppButton/AppButton';
import { useWaitListStore } from '../../../store/waitlistStore';
import { EMAIL_REGEX, VALIDATION_MESSAGES } from '../../../utils/constants';

interface IFormType {
  email: string;
}

export const Email = () => {
  const navigate = useNavigate();
  const { email, updateStore, resetStore, addToWaitList } = useWaitListStore();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm<IFormType>({ mode: 'onChange', defaultValues: { email } });

  const goBack = () => navigate(-1);

  const onSubmit = async ({ email }: IFormType) => {
    updateStore('email', email);
    resetStore(['phoneNumber', 'teamSize', 'budget', 'businessIndustry', 'dailyEmailsCount', 'emailService', 'helpdesk', 'sop']);
    await addToWaitList();
    navigate(ROUTES.WAITLIST_PHONE);
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
                  invalid={!!errors['email']}
                  invalidMessage={errors['email']?.message}
                  placeholder={'Email'}
                  className={classes.phoneField}
                  {...register('email', {
                    required: { value: true, message: VALIDATION_MESSAGES.EMAIL_REQUIRED },
                    pattern: { value: EMAIL_REGEX, message: VALIDATION_MESSAGES.EMAIL_FORMAT }
                  })}
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
