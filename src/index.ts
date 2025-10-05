
import Express from 'express';
import morgan from 'morgan';

import type { Request } from 'openapi-backend';
import { OpenAPIBackend } from 'openapi-backend';
import {
  getAnimals,
  postAnimal,
  getAnimalByKind,
  putAnimal  
} from './controllers/animalsController.js';

const app = Express();
app.use(Express.json());

// Dit project kan gemerged worden met ts-sports-planning-compute-api.
// De logica voor het berekenen kan ook in deze source. 
// Laad wel ts-sports-planning in via npm.

// define api
const api = new OpenAPIBackend({definition: "definitions/guustflater-openapi.yaml"});


// register handlers
api.register({
  getAnimals,
  postAnimal,
  getAnimalByKind,
  putAnimal,
  validationFail: async (c, req: Express.Request, res: Express.Response) =>
    res.status(400).json({ err: c.validation.errors }),
  notFound: async (c, req: Express.Request, res: Express.Response) => res.status(404).json({ err: 'not found' }),
});

api.init();

// logging
app.use(morgan('combined'));

// use as express middleware
app.use((req, res) => api.handleRequest(req as Request, req, res));

// start server
app.listen(9000, () => console.info('api listening at http://localhost:9000'));


