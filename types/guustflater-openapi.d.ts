import type {
  Context,
  UnknownParams,
} from 'openapi-backend';

declare namespace Components {
    namespace Schemas {
        export interface Animal {
            kind: /**
             * example:
             * Turtle
             */
            AnimalKindEnum;
            /**
             * example:
             * Buddy
             */
            name: string;
        }
        /**
         * example:
         * Turtle
         */
        export type AnimalKindEnum = "Cat" | "Kokmeeuw" | "Mouse" | "Goldfish" | "Egel" | "Turtle";
    }
}
declare namespace Paths {
    namespace GetAnimalByKind {
        namespace Parameters {
            export type Kind = /**
             * example:
             * Turtle
             */
            Components.Schemas.AnimalKindEnum;
        }
        export interface PathParameters {
            kind: Parameters.Kind;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace GetAnimals {
        namespace Responses {
            export type $200 = Components.Schemas.Animal[];
        }
    }
    namespace PostAnimal {
        export type RequestBody = Components.Schemas.Animal;
        namespace Responses {
            export type $200 = Components.Schemas.Animal;
            export interface $400 {
                /**
                 * Error message describing the bad request
                 */
                message?: string;
            }
        }
    }
    namespace PutAnimal {
        namespace Parameters {
            export type Kind = /**
             * example:
             * Turtle
             */
            Components.Schemas.AnimalKindEnum;
        }
        export interface PathParameters {
            kind: Parameters.Kind;
        }
        export type RequestBody = Components.Schemas.Animal;
        namespace Responses {
            export type $200 = Components.Schemas.Animal;
            export interface $400 {
                /**
                 * Error message describing the bad request
                 */
                message?: string;
            }
        }
    }
}


export interface Operations {
  /**
   * GET /animals
   */
  ['getAnimals']: {
    requestBody: any;
    params: UnknownParams;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<any, UnknownParams, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.GetAnimals.Responses.$200;
  }
  /**
   * POST /animals
   */
  ['postAnimal']: {
    requestBody: Paths.PostAnimal.RequestBody;
    params: UnknownParams;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<Paths.PostAnimal.RequestBody, UnknownParams, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.PostAnimal.Responses.$200 | Paths.PostAnimal.Responses.$400;
  }
  /**
   * GET /animals/{kind}
   */
  ['getAnimalByKind']: {
    requestBody: any;
    params: Paths.GetAnimalByKind.PathParameters;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<any, Paths.GetAnimalByKind.PathParameters, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.GetAnimalByKind.Responses.$200;
  }
  /**
   * PUT /animals/{kind}
   */
  ['putAnimal']: {
    requestBody: Paths.PutAnimal.RequestBody;
    params: Paths.PutAnimal.PathParameters;
    query: UnknownParams;
    headers: UnknownParams;
    cookies: UnknownParams;
    context: Context<Paths.PutAnimal.RequestBody, Paths.PutAnimal.PathParameters, UnknownParams, UnknownParams, UnknownParams>;
    response: Paths.PutAnimal.Responses.$200 | Paths.PutAnimal.Responses.$400;
  }
}

export type OperationContext<operationId extends keyof Operations> = Operations[operationId]["context"];
export type OperationResponse<operationId extends keyof Operations> = Operations[operationId]["response"];
export type HandlerResponse<ResponseBody, ResponseModel = Record<string, any>> = ResponseModel & { _t?: ResponseBody };
export type OperationHandlerResponse<operationId extends keyof Operations> = HandlerResponse<OperationResponse<operationId>>;
export type OperationHandler<operationId extends keyof Operations, HandlerArgs extends unknown[] = unknown[]> = (...params: [OperationContext<operationId>, ...HandlerArgs]) => Promise<OperationHandlerResponse<operationId>>;


export type Animal = Components.Schemas.Animal;
export type AnimalKindEnum = Components.Schemas.AnimalKindEnum;
