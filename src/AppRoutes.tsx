import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Sop } from './pages/waitlist/sop/Sop';
import { Email } from './pages/waitlist/email/Email';
import { Budget } from './pages/waitlist/budget/Budget';
import { TeamSize } from './pages/waitlist/team-size/TeamSize';
import { HelpDesk } from './pages/waitlist/helpdesk/HelpDesk';
import { PhoneNumber } from './pages/waitlist/phone-number/PhoneNumber';
import { EmailService } from './pages/waitlist/email-service/EmailService';
import { WaitListLayout } from './pages/waitlist/layout/WaitListLayout';
import { BusinessIndustry } from './pages/waitlist/business-industry/BusinessIndustry';
import { DailyEmailsCount } from './pages/waitlist/daily-emails-count/DailyEmailsCount';

export const AppRoutes = () => {
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<WaitListLayout />}>
          <Route path='/' element={<Email />} />
          <Route path='/phone' element={<PhoneNumber />} />
          <Route path='/team-size' element={<TeamSize />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/business-industry' element={<BusinessIndustry />} />
          <Route path='/daily-emails-count' element={<DailyEmailsCount />} />
          <Route path='/email-service' element={<EmailService />} />
          <Route path='/helpdesk' element={<HelpDesk />} />
          <Route path='/sop' element={<Sop />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
