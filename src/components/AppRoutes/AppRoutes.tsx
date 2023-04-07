import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { ROUTES } from './constants';
import { Sop } from '../../pages/waitlist/sop/Sop';
import { Email } from '../../pages/waitlist/email/Email';
import { Budget } from '../../pages/waitlist/budget/Budget';
import { TeamSize } from '../../pages/waitlist/team-size/TeamSize';
import { HelpDesk } from '../../pages/waitlist/helpdesk/HelpDesk';
import { NotFound } from '../../pages/not-found/NotFound';
import { PhoneNumber } from '../../pages/waitlist/phone-number/PhoneNumber';
import { EmailService } from '../../pages/waitlist/email-service/EmailService';
import { WaitListLayout } from '../../pages/waitlist/layout/WaitListLayout';
import { JoinedWaitList } from '../../pages/joined-waitlist/JoinedWaitlist';
import { BusinessIndustry } from '../../pages/waitlist/business-industry/BusinessIndustry';
import { DailyEmailsCount } from '../../pages/waitlist/daily-emails-count/DailyEmailsCount';

export const AppRoutes = () => {
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTES.SIGNUP} element={<WaitListLayout />}>
          <Route path={ROUTES.SIGNUP_EMAIL} element={<Email />} />
          <Route path={ROUTES.SIGNUP_PHONE} element={<PhoneNumber />} />
          <Route path={ROUTES.SIGNUP_TEAM_SIZE} element={<TeamSize />} />
          <Route path={ROUTES.SIGNUP_BUDGET} element={<Budget />} />
          <Route path={ROUTES.SIGNUP_BUSINESS_INDUSTRY} element={<BusinessIndustry />} />
          <Route path={ROUTES.SIGNUP_DAILY_EMAILS_COUNT} element={<DailyEmailsCount />} />
          <Route path={ROUTES.SIGNUP_EMAIL_SERVICES} element={<EmailService />} />
          <Route path={ROUTES.SIGNUP_HELPDESK} element={<HelpDesk />} />
          <Route path={ROUTES.SIGNUP_SOP} element={<Sop />} />
        </Route>

        <Route path={ROUTES.JOINED_WAITLIST} element={<JoinedWaitList />} />

        <Route path={'*'} element={<NotFound />} />

      </Routes>
    </AnimatePresence>
  );
};
