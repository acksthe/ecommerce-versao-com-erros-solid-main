import { IPaymentMethod } from './IPaymentMethod';

export class PixPayment implements IPaymentMethod {
  async process(amount: number): Promise<void> {
    console.log(`Pagamento via PIX: R$ ${amount}`);
  }
}
