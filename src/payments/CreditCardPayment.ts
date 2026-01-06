import { IPaymentMethod } from './IPaymentMethod';

export class CreditCardPayment implements IPaymentMethod {
  async process(amount: number): Promise<void> {
    console.log(`Pagamento no cartão: R$ ${amount}`);
  }
}
