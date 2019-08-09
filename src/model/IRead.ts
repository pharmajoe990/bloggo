import {Document, DocumentQuery} from "mongoose";

export interface IRead<T> {
  // retrieve: (callback: (error: any, result: any) => void) => void;
  // findById: (id: string, callback: (error: any, result: T) => void) => void;
  // findOne(cond?: object, callback?: (err: any, res: T) => void): mongoose.Query<T>;
  find(cond: object, callback?: (err: any, res: T[]) => void): DocumentQuery<Document[], Document>;
}
