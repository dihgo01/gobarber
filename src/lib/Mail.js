import nodemailer from 'nodemailer';
import mailConfig from '../config/mail'
import { formatRFC3339WithOptions } from 'date-fns/fp';

class Mail{
    constructor() {
        const { host, port, secure, auth } = mailConfig;
         
        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: auth.user ? auth : null,
        });
    }
    sendMail(message){
        return this.transporter.sendMail({
            ...mailConfig.default,
            ...message,
        });
    }
}

export default new Mail();