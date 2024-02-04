import { ExcludeId } from "./types";

const defaultPortNumber: string = "8000";
const findAll: {} = {} as const;
const excludeId: ExcludeId = { projection: { _id: 0 } };

export { defaultPortNumber, findAll, excludeId };
