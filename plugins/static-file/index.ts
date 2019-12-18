'use strict';
import * as Hapi from '@hapi/hapi';

async function staticFile(server: Hapi.Server, options: Hapi.ServerOptions) {
  const staticRoute = {
    method: 'GET',
    path: '/public/{filename*}',
    handler: {
      // directory: { path: Path.normalize(__dirname + '/') }
      directory: {
        path: 'src/assets/',
        listing: true
      }
    }
  };

  server.route([].concat(staticRoute));
}

export const plugin = {
  register: staticFile,
  name: 'staticFile',
  version: '0.0.1'
};
