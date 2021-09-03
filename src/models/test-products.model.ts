import {Entity, model, property} from '@loopback/repository';

@model()
export class TestProducts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  product_id?: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'string',
  })
  uom?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
    default: 1,
  })
  qty?: number;

  @property({
    type: 'number',
    default: 0,
  })
  total?: number;

  @property({
    type: 'string',
  })
  imgUrl?: string;

  @property({
    type: 'array',
    itemType: 'object',
    default: [],
  })
  variations?: object[];

  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<TestProducts>) {
    super(data);
  }
}

export interface TestProductsRelations {
  // describe navigational properties here
}

export type TestProductsWithRelations = TestProducts & TestProductsRelations;
