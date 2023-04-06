import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './BusinessIndustry.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { businessIndustry as businessIndustryValues } from '../constants';

interface IFormType {
  businessIndustry: string;
}

export const BusinessIndustry = () => {
  const navigate = useNavigate();
  const { businessIndustry, updateStore } = useWaitListStore();
  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm<IFormType>({ defaultValues: { businessIndustry } });

  const goBack = () => navigate(-1);

  const onSubmit = ({ businessIndustry }: IFormType) => {
    updateStore('businessIndustry', businessIndustry);
    navigate('/daily-emails-count');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={businessIndustryValues['SaaS']}
                  label={businessIndustryValues['1']}
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={businessIndustryValues['Agency']}
                  label={businessIndustryValues['2']}
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={businessIndustryValues['Other']}
                  label={businessIndustryValues['3']}
                  {...register('businessIndustry', { required: true })}
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
