// helpers/knex.ts
import Knex from 'knex';
import knexfile from './knexfile';

let knexConfig: object;

switch (process.env.NODE_ENV) {
  case 'production':
    knexConfig = knexfile.production;
    break;
  case 'development':
    knexConfig = knexfile.development;
    break;
  case 'staging':
    knexConfig = knexfile.staging;
  default:
    knexConfig = knexfile.staging;
    break;
}
export const knex = Knex(knexConfig);

// knex.on('query-error', function (err: any) {
//   console.log('Knex query-error (implemented in knex.ts file) -> ', err);
// });
