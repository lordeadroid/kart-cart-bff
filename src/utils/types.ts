import { NextFunction, Request, Response } from "express";

type Id = {
  _id: number;
};

type ExcludeId = {
  projection: Id;
};

type RequestData = (
  databaseName: string,
  collectionName: string
) => Promise<Object>;

type ApiRequest = (req: Request, res: Response, next?: NextFunction) => void;

export { ExcludeId, RequestData, ApiRequest };
