import { IMailProvider } from '../providers/IMailProvider';

export class NotificationService {
  constructor(private mailProvider: IMailProvider) {}

  async sendOrderConfirmation(email: string) {
    await this.mailProvider.send(
      email,
      'Pedido confirmado',
      '<p>Seu pedido foi realizado com sucesso!</p>'
    );
  }
}
