import { Product } from './IProduct';
import { PhysicalProduct } from './PhysicalProduct';
import { DigitalProduct } from './DigitalProduct';

export class ProductFactory {
  static create(data: any): Product {
    // adaptação dos dados vindos do banco
    if (
      data.type === 'digital' ||
      data.isDigital === true
    ) {
      return new DigitalProduct(data.id, data.price);
    }

    // default: produto físico
    return new PhysicalProduct(data.id, data.price);
  }
}
