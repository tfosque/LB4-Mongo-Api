import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TestProducts} from '../models';
import {TestProductsRepository} from '../repositories';

export class TestproductsController {
  constructor(
    @repository(TestProductsRepository)
    public testProductsRepository : TestProductsRepository,
  ) {}

  @post('/test-products')
  @response(200, {
    description: 'TestProducts model instance',
    content: {'application/json': {schema: getModelSchemaRef(TestProducts)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestProducts, {
            title: 'NewTestProducts',
            
          }),
        },
      },
    })
    testProducts: TestProducts,
  ): Promise<TestProducts> {
    return this.testProductsRepository.create(testProducts);
  }

  @get('/test-products/count')
  @response(200, {
    description: 'TestProducts model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TestProducts) where?: Where<TestProducts>,
  ): Promise<Count> {
    return this.testProductsRepository.count(where);
  }

  @get('/test-products')
  @response(200, {
    description: 'Array of TestProducts model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TestProducts, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TestProducts) filter?: Filter<TestProducts>,
  ): Promise<TestProducts[]> {
    return this.testProductsRepository.find(filter);
  }

  @patch('/test-products')
  @response(200, {
    description: 'TestProducts PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestProducts, {partial: true}),
        },
      },
    })
    testProducts: TestProducts,
    @param.where(TestProducts) where?: Where<TestProducts>,
  ): Promise<Count> {
    return this.testProductsRepository.updateAll(testProducts, where);
  }

  @get('/test-products/{id}')
  @response(200, {
    description: 'TestProducts model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TestProducts, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TestProducts, {exclude: 'where'}) filter?: FilterExcludingWhere<TestProducts>
  ): Promise<TestProducts> {
    return this.testProductsRepository.findById(id, filter);
  }

  @patch('/test-products/{id}')
  @response(204, {
    description: 'TestProducts PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TestProducts, {partial: true}),
        },
      },
    })
    testProducts: TestProducts,
  ): Promise<void> {
    await this.testProductsRepository.updateById(id, testProducts);
  }

  @put('/test-products/{id}')
  @response(204, {
    description: 'TestProducts PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() testProducts: TestProducts,
  ): Promise<void> {
    await this.testProductsRepository.replaceById(id, testProducts);
  }

  @del('/test-products/{id}')
  @response(204, {
    description: 'TestProducts DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.testProductsRepository.deleteById(id);
  }
}
