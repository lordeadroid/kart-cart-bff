<<<<<<< HEAD
import { NextFunction, Request, Response } from "express";

=======
>>>>>>> 2513c2f (migrated mongodb code to ts)
type Id = {
  _id: number;
};

type ExcludeId = {
  projection: Id;
};

<<<<<<< HEAD
type RequestData = (
  databaseName: string,
  collectionName: string
) => Promise<Object>;

type ApiRequest = (req: Request, res: Response, next: NextFunction) => void;

export { ExcludeId, RequestData, ApiRequest };
=======
type RequestData = {
  databaseName: string;
  collectionName: string;
};

export { ExcludeId, RequestData };
>>>>>>> 2513c2f (migrated mongodb code to ts)
