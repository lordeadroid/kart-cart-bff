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

export { ExcludeId, RequestData };
