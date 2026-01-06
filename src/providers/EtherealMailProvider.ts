import { IMailProvider } from './IMailProvider';
import nodemailer from 'nodemailer';

export class EtherealMailProvider implements IMailProvider {
  async send(to: string, subject: string, body: string): Promise<void> {
    const transporter = nodemailer.createTransport({ /* config */ });

    await transporter.sendMail({
      to,
      subject,
      html: body,
    });
  }
}
