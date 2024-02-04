<<<<<<< HEAD
import { NextFunction, Request, Response } from "express";

=======
<<<<<<< HEAD
>>>>>>> 2513c2f (migrated mongodb code to ts)
=======
>>>>>>> 6f15833 (migrated mongodb code to ts)
>>>>>>> e125e5c (migrated mongodb code to ts)
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
<<<<<<< HEAD
>>>>>>> 2513c2f (migrated mongodb code to ts)
=======
>>>>>>> 6f15833 (migrated mongodb code to ts)
>>>>>>> e125e5c (migrated mongodb code to ts)
