import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './BusinessIndustry.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { wrapInsideSpan } from '../../../utils/fns';
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
            {wrapInsideSpan('What is your business industry?', {
              className: classes.questionChar
            })}
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={'1'}
                  label={businessIndustryValues['1']}
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={'2'}
                  label={businessIndustryValues['2']}
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={'3'}
                  label={businessIndustryValues['3']}
                  {...register('businessIndustry', { required: true })}
                />
                <AppRadioOption
                  value={'4'}
                  label={businessIndustryValues['4']}
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
