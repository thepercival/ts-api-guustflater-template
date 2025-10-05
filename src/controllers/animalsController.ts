import type { Context, Document } from 'openapi-backend';
import type { Request, Response } from 'express';
import type { Animal } from 'guustflater-openapi';

export async function getAnimals(context: Context<Document>, req: Request, res: Response) {
  const animals: Animal[] = [
    { kind: 'Cat', name: 'Mittens' },
    { kind: 'Goldfish', name: 'Goldie' },
  ];
  console.log(animals);
  return res.status(200).json(animals);
}

export async function postAnimal(context: Context<Document>, req: Request, res: Response) {
  const animal: Animal = req.body;

  const animals: Animal[] = [
    { kind: 'Cat', name: 'Mittens' },
    { kind: 'Goldfish', name: 'Goldie' },
  ];
  animals.push(animal);
  return res.status(200).json(animal);
}

export async function getAnimalByKind(context: Context<Document>, req: Request, res: Response) {
  const kind = (req.params && (req.params as any).kind) || 'Goldfish';
  return res.status(200).json({ kind, name: kind === 'Cat' ? 'Mittens' : 'Goldie' });
}

export async function putAnimal(context: Context<Document>, req: Request, res: Response) {
  return res.status(200).end();
}

