import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CartDataSource} from '../datasources';
import {TestProducts, TestProductsRelations} from '../models';

export class TestProductsRepository extends DefaultCrudRepository<
  TestProducts,
  typeof TestProducts.prototype.id,
  TestProductsRelations
> {
  constructor(
    @inject('datasources.cart') dataSource: CartDataSource,
  ) {
    super(TestProducts, dataSource);
  }
}
