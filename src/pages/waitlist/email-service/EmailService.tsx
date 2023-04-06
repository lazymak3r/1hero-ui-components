import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './EmailService.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { emailService as emailServiceValues } from '../constants';

interface IFormType {
  emailService: string;
}

export const EmailService = () => {
  const navigate = useNavigate();
  const { emailService, updateStore } = useWaitListStore();
  const { register } = useForm<IFormType>({ defaultValues: { emailService } });

  const onSubmit = ({ emailService }: IFormType) => {
    updateStore('emailService', emailService);
    navigate('/helpdesk');
  };

  return (
    <motion.div {...fadeIn}>
      <form>
        <div className={classes.wrapper}>
          <h2
            className={classes.question}
          >
            What Email Service Provider do you use?
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={emailServiceValues['Gmail']}
                  label={emailServiceValues['0']}
                  onClick={(event) => onSubmit({ emailService: event.currentTarget.value })}
                  {...register('emailService', { required: true })}
                />
                <AppRadioOption
                  value={emailServiceValues['Outlook']}
                  label={emailServiceValues['1']}
                  onClick={(event) => onSubmit({ emailService: event.currentTarget.value })}
                  {...register('emailService', { required: true })}
                />
                <AppRadioOption
                  value={emailServiceValues['Zoho']}
                  label={emailServiceValues['2']}
                  onClick={(event) => onSubmit({ emailService: event.currentTarget.value })}
                  {...register('emailService', { required: true })}
                />
                <AppRadioOption
                  value={emailServiceValues['Other']}
                  label={emailServiceValues['3']}
                  onClick={(event) => onSubmit({ emailService: event.currentTarget.value })}
                  {...register('emailService', { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
