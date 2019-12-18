import * as dotenv from 'dotenv';
import * as Confidence from 'confidence';
import ConfigJson from '../config/config.json';

dotenv.config();
const AppManifest = new Confidence.Store(ConfigJson).get('/', {
  env: process.env.NODE_ENV
});

export = {
  development: {
    client: 'postgresql',
    debug: true,
    connection: {
      database: AppManifest.db.pg.dbname,
      user: AppManifest.db.pg.username,
      password: AppManifest.db.pg.password
    },
    pool: {
      min: Number(AppManifest.db.pg.pool.min),
      max: Number(AppManifest.db.pg.pool.max)
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: AppManifest.knex.migration_table
    },
    seeds: {
      directory: __dirname + '/seeds/development'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/seeds/staging'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: AppManifest.db.pg.dbname,
      user: AppManifest.db.pg.username,
      password: AppManifest.db.pg.password
    },
    pool: {
      min: Number(AppManifest.db.pg.pool.min),
      max: Number(AppManifest.db.pg.pool.max)
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: AppManifest.knex.migration_table
    },
    seeds: {
      directory: __dirname + '/seeds/production'
    }
  }
};
