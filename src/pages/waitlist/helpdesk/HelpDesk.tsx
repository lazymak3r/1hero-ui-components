import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import classes from './HelpDesk.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { ROUTES } from '../../../components/AppRoutes/constants';
import { useForm } from 'react-hook-form';
import { AppRadioOption } from '../../../components/AppRadioOption/AppRadioOption';
import { useWaitListStore } from '../../../store/waitlistStore';
import { helpdesk as helpdeskValues } from '../constants';

interface IFormType {
  helpdesk: string;
}

export const HelpDesk = () => {
  const navigate = useNavigate();
  const { helpdesk, updateStore, addToWaitList } = useWaitListStore();
  const { register } = useForm<IFormType>({ defaultValues: { helpdesk } });

  const onSubmit = async ({ helpdesk }: IFormType) => {
    updateStore('helpdesk', helpdesk);
    await addToWaitList();
    setTimeout(() => {
      navigate(ROUTES.SIGNUP_SOP);
    }, 200);
  };

  return (
    <motion.div {...fadeIn}>
      <form>
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
                  onClick={(event) => onSubmit({ helpdesk: event.currentTarget.value })}
                  {...register('helpdesk', { required: true })}
                />
                <AppRadioOption
                  value={helpdeskValues['Zendesk']}
                  label={helpdeskValues['1']}
                  onClick={(event) => onSubmit({ helpdesk: event.currentTarget.value })}
                  {...register('helpdesk', { required: true })}
                />
                <AppRadioOption
                  value={helpdeskValues['Gorgias']}
                  label={helpdeskValues['2']}
                  onClick={(event) => onSubmit({ helpdesk: event.currentTarget.value })}
                  {...register('helpdesk', { required: true })}
                />
                <AppRadioOption
                  value={helpdeskValues['Other']}
                  label={helpdeskValues['3']}
                  onClick={(event) => onSubmit({ helpdesk: event.currentTarget.value })}
                  {...register('helpdesk', { required: true })}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
