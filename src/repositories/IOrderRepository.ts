export interface IOrderRepository {
  save(data: any): Promise<void>;
}
