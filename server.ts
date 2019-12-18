// src/server.ts
import * as dotenv from 'dotenv';
import * as Handlebars from 'handlebars';
import * as Glue from '@hapi/glue';
import * as Confidence from 'confidence';
import manifestJson from './config/manifest.json';

dotenv.config();
const init = async () => {
  try {
    /**
     * CONFIDENCE STORE & GLUE COMPOSITION
     */
    const manifest = new Confidence.Store(manifestJson).get('/', {
      env: process.env.NODE_ENV
    });
    const composeOptions = { relativeTo: __dirname };
    const server = await Glue.compose(manifest, composeOptions);

    /**
     * SETUP VIEWS TEMPLATES
     */
    server.views({
      engines: { hbs: Handlebars },
      relativeTo: __dirname,
      path: './templates/app',
      layout: true,
      helpersPath: './helpers/view-helpers',
      layoutPath: './views/layouts',
      partialsPath: './views/partials',
      // for dev
      isCached: false
    });

    await server.start();

    // server.log('info', `Server is running on port -> ${reu}` );
    server.log('info', 'Node server running...');
    server.log(`Environment -> ${process.env.NODE_ENV}`);
  } catch (err) {
    throw new Error(err);
    // process.exit(1);
  }
};

init();
