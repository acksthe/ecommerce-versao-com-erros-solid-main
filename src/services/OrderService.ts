import { ProductFactory } from '../domain/ProductFactory';
import { IOrderRepository } from '../repositories/IOrderRepository';
import { IPaymentMethod } from '../payments/IPaymentMethod';
import { NotificationService } from './NotificationService';

export class OrderService {
  constructor(
    private orderRepository: IOrderRepository,
    private paymentMethod: IPaymentMethod,
    private notificationService: NotificationService
  ) {}

  async execute(data: any): Promise<void> {
    let total = 0;
    let freight = 0;

    for (const item of data.items) {
      // o service NÃO interpreta o tipo do produto
      const product = ProductFactory.create(item.product);

      total += product.getPrice() * item.quantity;
      freight += product.calculateFreight();
    }

    const amountToPay = total + freight;

    await this.paymentMethod.process(amountToPay);

    await this.orderRepository.save({
      customer: data.customer,
      total,
      freight,
      paymentMethod: data.paymentMethod,
    });

    await this.notificationService.sendOrderConfirmation(data.customer);
  }
}
