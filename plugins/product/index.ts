// plugins/api/index.ts
import * as Hapi from '@hapi/hapi';
import * as productHandler from './handler';

async function product(server: Hapi.Server, options: Hapi.ServerOptions) {
  server.route({
    method: 'GET',
    path: '/products',
    handler: productHandler.getProducts
  });

  server.route({
    method: 'GET',
    path: '/product/{id}',
    handler: productHandler.getProduct
  });

  server.route({
    method: 'POST',
    path: '/product',
    handler: productHandler.createProduct
  });

  server.route({
    method: 'PUT',
    path: '/product/{id}',
    handler: productHandler.updateProduct
  });

  server.route({
    method: 'DELETE',
    path: '/product/{id}',
    handler: productHandler.deleteProduct
  });
}

export const plugin = {
  register: product,
  name: 'product-plugin',
  version: '0.0.1'
};
