import {Document, DocumentQuery, Model} from "mongoose";
import {IRead} from "./IRead";
import {IWrite} from "./IWrite";

export class RepositoryBase<T extends Document> implements IWrite<T>, IRead<T> {

  private model: Model<Document>;

  constructor(schemaModel: Model<Document>) {
    this.model = schemaModel;
  }

  public create(item: T, callback: (error: any, result: T) => void) {
    this.model.create(item, callback);
  }

  public find(cond?: object, callback?: (err: any, res: T[]) => void): DocumentQuery<Document[], Document> {
    return this.model.find(cond, callback);
  }
}
