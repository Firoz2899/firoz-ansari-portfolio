export interface IEmailCommonDto {
    [key: string]: unknown;
    'g-recaptcha-response': string;
}

export interface ISendContactEmail extends IEmailCommonDto {
  from_name: string;
  from_email: string;
  from_phone_number: string;
  subject: string;
  message: string;
}