import { Product } from './IProduct';

export class PhysicalProduct implements Product {
  constructor(
    private id: number,
    private price: number
  ) {}

  getId() {
    return this.id;
  }

  getPrice() {
    return this.price;
  }

  calculateFreight(): number {
    return 10; // regra fixa do enunciado
  }
}
