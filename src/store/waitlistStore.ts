import { create } from 'zustand';

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
}

export const useWaitListStore = create<WaitListStore>((set) => ({
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
  }
}));
