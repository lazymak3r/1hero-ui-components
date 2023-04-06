import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './HelpDesk.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { helpdesk as helpdeskValues } from '../constants';

interface IFormType {
  helpdesk: string;
}

export const HelpDesk = () => {
  const navigate = useNavigate();
  const { helpdesk, updateStore } = useWaitListStore();
  const { register, handleSubmit, formState: { isValid } } = useForm<IFormType>({ defaultValues: { helpdesk } });

  const goBack = () => navigate(-1);

  const onSubmit = ({ helpdesk }: IFormType) => {
    updateStore('helpdesk', helpdesk);
    navigate('/sop');
  };

  return (
    <motion.div {...fadeIn}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.wrapper}>
          <h2
            className={classes.question}
          >
            What helpdesk customer support platforms does your CS team use?
          </h2>
          <div className={classes.container}>
            <div className={classes.form}>
              <div className={classes.controls}>
                <AppRadioOption
                  value={helpdeskValues['re:amaze']}
                  label={helpdeskValues['0']}
                  {...register('helpdesk', { required: true })}
                />
                <AppRadioOption
                  value={helpdeskValues['Zendesk']}
                  label={helpdeskValues['1']}
                  {...register('helpdesk', { required: true })}
                />
                <AppRadioOption
                  value={helpdeskValues['Gorgias']}
                  label={helpdeskValues['2']}
                  {...register('helpdesk', { required: true })}
                />
                <AppRadioOption
                  value={helpdeskValues['Other']}
                  label={helpdeskValues['3']}
                  {...register('helpdesk', { required: true })}
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
