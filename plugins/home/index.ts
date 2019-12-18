// plugins/home/index.ts
import * as Hapi from '@hapi/hapi';
import * as homeHandler from './handler';

async function home(server: Hapi.Server, options: Hapi.ServerOptions) {
  server.route({
    method: 'GET',
    path: '/',
    handler: homeHandler.index
  });

  server.route({
    method: 'GET',
    path: '/hello',
    handler: homeHandler.sayHello
  });
}

export const plugin = {
  register: home,
  name: 'home-plugin',
  version: '0.0.1'
};
