import axios from 'axios';
import { create } from 'zustand';

import { IAddToWaitListResponse } from '../models/waitlist';

interface WaitListStore {
  email: string
  phoneNumber?: string;
  teamSize: string,
  budget: string,
  businessIndustry: string,
  dailyEmailsCount: string,
  emailService: string,
  helpdesk: string,
  sop: string
  updateStore: (prop: keyof TField, value: any) => void;
  resetStore: (values: (keyof TField)[]) => void;
  addToWaitList: () => Promise<IAddToWaitListResponse>;
}

type TField = Pick<WaitListStore, 'email' | 'phoneNumber' | 'teamSize' | 'budget' | 'businessIndustry' | 'dailyEmailsCount' | 'emailService' | 'helpdesk' | 'sop'>

const waitListInitialState: Record<keyof TField, any> = {
  email: '',
  phoneNumber: '',
  teamSize: '',
  budget: '',
  businessIndustry: '',
  dailyEmailsCount: '',
  emailService: '',
  helpdesk: '',
  sop: ''
};

export const useWaitListStore = create<WaitListStore>((set, getState) => ({
  ...waitListInitialState,
  updateStore: (prop: keyof TField, value: any) => {
    set(state => ({ [prop]: value }));
  },
  resetStore: (values: (keyof TField)[]) => {
    values.forEach(fieldName => getState().updateStore(fieldName, waitListInitialState[fieldName]));
  },
  addToWaitList: async () => {
    const {
      email,
      phoneNumber,
      teamSize,
      budget,
      businessIndustry,
      dailyEmailsCount,
      emailService,
      helpdesk,
      sop
    } = getState();

    const params = {
      email: email,
      ...(!!phoneNumber && { phoneNumber }),
      ...(!!teamSize && { teamSize: +teamSize }),
      ...(!!budget && { budget: +budget }),
      ...(!!businessIndustry && { businessIndustry: +businessIndustry }),
      ...(!!dailyEmailsCount && { dailyEmailsCount: +dailyEmailsCount }),
      ...(!!emailService && { emailService: +emailService }),
      ...(!!helpdesk && { helpdesk: +helpdesk }),
      ...(!!sop && { sop })
    };
    const response = await axios.post<IAddToWaitListResponse>('/waitlist/add', params);
    return response.data as IAddToWaitListResponse;
  }
}));
