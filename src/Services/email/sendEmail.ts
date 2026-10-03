import { ISendContactEmail } from '@/types/email';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';
import {config} from '@/utils/config';

class SendEmail {
    constructor(){
        emailjs.init({
            publicKey: config.emailPublicKey,
            // Do not allow headless browsers
            blockHeadless: true,
            blockList: {
                // Block the suspended emails
                list: [],
                // The variable contains the email address
                // watchVariable: 'userEmail',
            },
            limitRate: {
                // Set the limit rate for the application
                id: 'app',
                // Allow 1 request per 10s
                throttle: 1000 * 10,
            },
        });
    }

    async sendContactEmail(dto: ISendContactEmail): Promise<EmailJSResponseStatus> {
        return await emailjs.send(
            config.emailServiceId, 
            config.emailTemplateId, 
            dto
        );
    }
}

export const sendEmail = new SendEmail();