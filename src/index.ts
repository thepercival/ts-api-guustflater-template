import Express from 'express';
import morgan from 'morgan';

import type { Context, Document, Request } from 'openapi-backend';
import { OpenAPIBackend } from 'openapi-backend';
import { Animal } from 'guustflater-openapi';

const app = Express();
app.use(Express.json());

// Dit project kan gemerged worden met ts-sports-planning-compute-api.
// De logica voor het berekenen kan ook in deze source. 
// Laad wel ts-sports-planning in via npm.

// const animal: Animal = { kind: 'Cat', name: 'Mittens2' };

// define api
const api = new OpenAPIBackend({definition: "definitions/guustflater-openapi.yaml"});
// console.log(api, animal);
console.log({ kind: 'Cat', name: 'Mittens' });

// register handlers
api.register({
    getAnimals: async (context: Context<Document>, req: Express.Request, res: Express.Response) => {
      const animals: Animal[] = [
        { kind: 'Cat', name: 'Mittens' },
        { kind: 'Goldfish', name: 'Goldie' },
      ];
      console.log(animals);
      return res.status(200).json(animals);
    },
    postAnimal: async (context: Context<Document>, req: Express.Request, res: Express.Response) => {
      const animal: Animal = req.body;

      const animals: Animal[] = [
        { kind: 'Cat', name: 'Mittens' },
        { kind: 'Goldfish', name: 'Goldie' },
      ];
      animals.push(animal);
      return res.status(200).json(animal);
    },
    getAnimalByKind: async (context: Context<Document>, req: Express.Request, res: Express.Response) => {
      return res.status(200).json({ kind: 'Goldfish', name: 'Goldie' });
    },
    putAnimal: async (context: Context<Document>, req: Express.Request, res: Express.Response) => {
      return res.status(200);
    },
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
