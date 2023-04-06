import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './EmailService.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { wrapInsideSpan } from '../../../utils/fns';
import { useWaitListStore } from '../../../store/waitlistStore';
import { emailService as emailServiceValues } from '../constants';

interface IFormType {
  emailService: string;
}

export const EmailService = () => {
  const navigate = useNavigate();
  const { emailService, updateStore } = useWaitListStore();
  const { register, handleSubmit, formState: { isValid } } = useForm<IFormType>({ defaultValues: { emailService } });

  const goBack = () => navigate(-1);

  const onSubmit = ({ emailService }: IFormType) => {
    updateStore('emailService', emailService);
    navigate('/helpdesk');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.wrapper}>
          <h2
            className={classes.question}
          >
            {wrapInsideSpan('What Email Service Provider do you use?', {
              className: classes.questionChar
            })}
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={'1'}
                  label={emailServiceValues['1']}
                  {...register('emailService', { required: true })}
                />
                <AppRadioOption
                  value={'2'}
                  label={emailServiceValues['2']}
                  {...register('emailService', { required: true })}
                />
                <AppRadioOption
                  value={'3'}
                  label={emailServiceValues['3']}
                  {...register('emailService', { required: true })}
                />
                <AppRadioOption
                  value={'4'}
                  label={emailServiceValues['4']}
                  {...register('emailService', { required: true })}
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
