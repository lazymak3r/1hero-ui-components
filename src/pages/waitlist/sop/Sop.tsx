import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiHelpCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';

import classes from './Sop.module.scss';
import { fadeIn } from '../../../utils/routeAnimations';
import { useForm } from 'react-hook-form';
import { AppModal } from '../../../components/AppModal/AppModal';
import { AppButton } from '../../../components/AppButton/AppButton';
import { AppTextarea } from '../../../components/AppTextarea/AppTextarea';
import { useWaitListStore } from '../../../store/waitlistStore';

interface IFormType {
  sop: string;
}

export const Sop = () => {
  const navigate = useNavigate();
  const [helpModalShown, setHelpModalShown] = useState(false);
  const { sop, updateStore, addToWaitList } = useWaitListStore();
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isValid }
  } = useForm<IFormType>({ defaultValues: { sop } });

  const goBack = () => navigate(-1);

  const windowFocusHandler = async () => {
    try {
      // const clipBoardText = await navigator.clipboard.readText();
      // if (!watch('sop') && clipBoardText) {
      // const value = confirm('Allow Paste?');
      // value && setValue('sop', clipBoardText);
      // }
    } catch (e) {
    }
  };

  const onSubmit = async ({ sop }: IFormType) => {
    updateStore('sop', sop);
    const response = await addToWaitList();
    if (response?.data?.subscriber) {
      // Todo Redirect to Success page
    }
  };

  useEffect(() => {
    window.addEventListener('focus', windowFocusHandler);

    return () => {
      window.removeEventListener('focusin', windowFocusHandler);
    };
  }, []);

  return (
    <>
      <motion.div {...fadeIn}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.wrapper}>
            <h2
              className={classes.question}
            >
              Most importantly we expect to learn about your business procedures your customer support agents should
              follow when customers address their most often requests (e.g. return and refund procedures,
              troubleshooting guide etc.){' '}
              <span
                className={classes.helpIcon}
                onClick={() => setHelpModalShown(true)}>
                <FiHelpCircle stroke={'rgb(0, 122, 255)'} />
              </span>
            </h2>
            <div className={classes.container}>
              <div className={classes.form}>
                <div className={classes.controls}>
                  <AppTextarea
                    rows={10}
                    asterisk={true}
                    autoFocus={true}
                    placeholder={'SOP/FAQ'}
                    inputClassName={classes.sopField}
                    {...register('sop', { required: true })}
                  />
                  <div className={classes.actions}>
                    <AppButton type={'submit'} text={'Submit'} disable={!isValid} className={classes.action} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </motion.div>

      <AppModal
        width={640}
        isVisible={helpModalShown}
        onClose={() => setHelpModalShown(false)}
      >
        <h2>Checkout The Example Below</h2>
        <br/>
        Customer Inquiry: Purchasing Skull Shaver Products
        Inform customers that products can be purchased online with worldwide shipping.
        Provide information about shipping times (5-7 business days).
        Customer Inquiry: Out-of-stock Products and Refunds
        Direct customers to subscribe to our newsletter for updates.
        Assure customers of a prompt refund.
        Customer Inquiry: Product Restocking
        Inform customers about ongoing efforts to meet high demand.
        Request specific product information, if not provided.
        Customer Inquiry: Prepaid Return Label or Return Address
        Direct customers to our RMA form (https://rma.com).
        Offer further assistance if needed.
        Customer Inquiry: Order Status Update
        Forward the request to a colleague.
        Provide an update as soon as possible.
        Customer Inquiry: Shaver Power Button Issues
        Provide troubleshooting instructions and a tutorial video (https://vimeo.com/434386576/cb68c5c2cd).
        Request purchase details and order number for warranty check.
        Customer Inquiry: Shaver Head Falling Apart
        Inform customers about warranty limitations.
        Offer a full refund if contacted within 30 days of purchase.
        Customer Inquiry: Invoice Request
        Forward the request to a colleague.
        Inform customers that the invoice will be sent soon.
        Customer Inquiry: Returned Shaver
        Offer a second delivery attempt.
        Request updated shipping information.
        Explain the limitations on further delivery attempts and refunds.
        Customer Inquiry: Personal Information Submission
        Thank the customer for providing the information.
        Inform them that their request has been processed and they will receive a notification soon.
        Customer Inquiry: Late Delivery
        Direct customers to track their package using the tracking number provided in their order confirmation email.
        If needed, request the order number to provide the tracking number.
        Customer Inquiry: Shaver Head Issues
        Suggest purchasing a new replacement blade.
        Explain the benefits of regular blade replacement.
        Customer Inquiry: Replacement Handle
        Confirm the customer's eligibility for a replacement handle under warranty.
        Provide instructions for receiving the replacement handle.
        Customer Inquiry: Returns
        Gather order details, including the order number, date of purchase, and product information.
        Verify eligibility for a return within 30 days of purchase.
        Provide instructions for the return process, including RMA number, prepaid shipping label, packaging guidelines,
        and return address.
        Customer Inquiry: Refunds
        Inform customers of the estimated refund processing timeframe (5-7 days).
        Let them know they may receive email updates throughout the process.
        Customer Inquiry: Troubleshooting
        Provide step-by-step troubleshooting instructions for common issues, such as shavers not turning on, holding a
        charge, cutting hair properly, or pulling hair.
        Customer Inquiry: Exchanges
        Gather necessary order details.
        Check
        Troubleshooting the Faulty Product:
        Follow the troubleshooting guide provided for the electric shaver.
        If the issue persists, proceed to step 2.
        Gathering Customer Information:
        Request the customer's order number, date of purchase, and product name or model number.
        Use this information to locate the order in the system.
        Warranty Check:
        Determine if the customer's electric shaver is still under warranty.
        Inform the customer that exchanges are only possible if the product is under warranty.
        Extended Warranty License (if applicable):
        If the issue relates to the shaver handle, present the option to purchase an extended warranty license.

        Provide information on the cost ($99), coverage period (3 months), and purchasing process.
        Exchange Process (if the product is under warranty or has an extended warranty license):
        Issue a return merchandise authorization (RMA) or confirmation number for the exchange.
        Instruct the customer to package the product securely to prevent damage during transit.
        Inform the customer that shipping fees will be covered and a prepaid return label will be provided via email.
        Provide the appropriate return address based on the customer's country (USA, France, etc.).
        Order Status Check (if the customer claims they didn't receive the package):
        Request the customer's order number, date of purchase, and product name or model number.
        Confirm the shipping address and verify it was entered correctly.
        Review the tracking information to determine the package's last known location and status.
        Instruct the customer to check with neighbors or household members if the package shows as delivered.
        If the customer insists the package is missing, contact the shipping carrier and, if necessary, file a lost
        package claim.
        Lost Package Resolution:
        If the shipping carrier confirms the package is lost, offer the customer a choice between reshipping the product
        at no additional cost, providing a refund, or offering store credit.
        Proceed with the customer's preferred option.
        Non-lost Package Resolution (if the shipping carrier doesn't confirm the package is lost):
        Apologize to the customer and offer a 10% discount code (Code:QQQ10) for future purchases.
        If the customer refuses the offer and demands another resolution, kindly inform them that the company policies
        only permit the offered 10% discount code.
      </AppModal>
    </>
  );
};
