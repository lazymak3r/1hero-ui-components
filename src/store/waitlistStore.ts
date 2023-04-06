import axios from 'axios';
import { create } from 'zustand';

import { IAddToWaitListResponse } from '../models/waitlist';

interface WaitListStore {
  phoneNumber?: string;
  email: string
  teamSize: string,
  budget: string,
  businessIndustry: string,
  dailyEmailsCount: string,
  emailService: string,
  helpdesk: string,
  sop: string
  updateStore: (prop: keyof WaitListStore, value: any) => void;
  addToWaitList: () => Promise<IAddToWaitListResponse>;
}

export const useWaitListStore = create<WaitListStore>((set, getState) => ({
  phoneNumber: undefined,
  email: '',
  teamSize: '',
  budget: '',
  businessIndustry: '',
  dailyEmailsCount: '',
  emailService: '',
  helpdesk: '',
  sop: '',
  updateStore: (prop: keyof WaitListStore, value: any) => {
    set(state => ({ [prop]: value }));
  },
  addToWaitList: async () => {
    const {
      phoneNumber,
      email,
      teamSize,
      budget,
      businessIndustry,
      dailyEmailsCount,
      emailService,
      helpdesk,
      sop
    } = getState();


    const response = await axios.post<IAddToWaitListResponse>('/waitlist/add', {
      phoneNumber,
      email,
      teamSize,
      budget,
      businessIndustry,
      dailyEmailsCount,
      emailService,
      helpdesk,
      sop
    });
    return response.data as IAddToWaitListResponse;
  }
}));
