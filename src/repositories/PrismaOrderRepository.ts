import { PrismaClient } from '@prisma/client';
import { IOrderRepository } from './IOrderRepository';

export class PrismaOrderRepository implements IOrderRepository {
  private prisma = new PrismaClient();

  async save(data: any): Promise<void> {
    await this.prisma.order.create({ data });
  }
}
