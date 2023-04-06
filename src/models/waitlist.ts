export interface ISubscriber {
  budget: string,
  businessIndustry: string
  createdAt: string
  dailyEmailsCount: string
  email: string
  emailService: string
  helpdesk: string
  phoneNumber: string
  sop: string
  teamSize: string
  updatedAt: string
  __v: number,
  _id: string
}

export interface IAddToWaitListResponse {
  data?: { subscriber?: ISubscriber },
  message: string
}
