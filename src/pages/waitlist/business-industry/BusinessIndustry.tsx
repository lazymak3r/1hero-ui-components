import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './BusinessIndustry.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { businessIndustry as businessIndustryValues } from '../constants';

interface IFormType {
  businessIndustry: string;
}

export const BusinessIndustry = () => {
  const navigate = useNavigate();
  const { businessIndustry, updateStore } = useWaitListStore();
  const { register } = useForm<IFormType>({ defaultValues: { businessIndustry } });

  const onSubmit = ({ businessIndustry }: IFormType) => {
    updateStore('businessIndustry', businessIndustry);
    setTimeout(() => {
      navigate('/daily-emails-count');
    }, 200);
  };

  return (
    <motion.div {...fadeIn}>
      <form>
        <div className={classes.wrapper}>
          <h2
            className={classes.question}
          >
            What is your business industry?
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={businessIndustryValues['eCommerce']}
                  label={businessIndustryValues['0']}
                  onClick={(event) => onSubmit({ businessIndustry: event.currentTarget.value })}
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={businessIndustryValues['SaaS']}
                  label={businessIndustryValues['1']}
                  onClick={(event) => onSubmit({ businessIndustry: event.currentTarget.value })}
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={businessIndustryValues['Agency']}
                  label={businessIndustryValues['2']}
                  onClick={(event) => onSubmit({ businessIndustry: event.currentTarget.value })}
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={businessIndustryValues['Other']}
                  label={businessIndustryValues['3']}
                  onClick={(event) => onSubmit({ businessIndustry: event.currentTarget.value })}
                  {...register('businessIndustry', { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
