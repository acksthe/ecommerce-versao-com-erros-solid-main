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

  async execute(data: any) {
    let total = 0;
    let frete = 0;

    for (const item of data.items) {
      const product = ProductFactory.create(item.product);
      total += product.getPrice() * item.quantity;
      frete += product.calculateFreight();
    }

    await this.paymentMethod.process(total + frete);
    await this.orderRepository.save({...data, total, frete});
    await this.notificationService.sendOrderConfirmation(data.customer);
  }
}
