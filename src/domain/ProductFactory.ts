import { Product } from './IProduct';
import { PhysicalProduct } from './PhysicalProduct';
import { DigitalProduct } from './DigitalProduct';

export class ProductFactory {
  static create(data: any): Product {
    switch (data.type) {
      case 'physical':
        return new PhysicalProduct(data.id, data.price);
      case 'digital':
        return new DigitalProduct(data.id, data.price);
      default:
        throw new Error('Tipo de produto desconhecido');
    }
  }
}
