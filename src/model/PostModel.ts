import * as mongoose from "mongoose";
import {Promise, Schema} from "mongoose";
import {PostRepository} from "./PostRepository";

export interface IPostModel extends mongoose.Document {
  date: Date;
  text: string;
  title: string;
}

const schema = new Schema({
  date: { type: Date, required: true },
  text: { type: String, required: true },
  title: { type: String, required: true },
});

export let PostSchema = mongoose.model<IPostModel>("post", schema, "posts", true);

export class PostModel {

  get date(): Date {
    return this.postModel.date;
  }

  get text(): string {
    return this.postModel.text;
  }

  get title(): string {
    return this.postModel.title;
  }

  public static createPost(title: string, text: string) {
    return new Promise((resolve: ({}) => void, reject: ({}) => void) => {

      const repo = new PostRepository();

      const post = {
        date: new Date(),
        text,
        title,
      } as IPostModel;

      repo.create(post, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });

    });
  }

  public static findByTitle(title: string): Promise<IPostModel> {
    return new Promise((resolve: ({}) => {}, reject: ({}) => void) => {
      const repo = new PostRepository();

      repo.find({title}).limit(1).exec((err, res) => {
        if (err) {
          reject(err);
        } else {
          if (res.length) {
            resolve(res[0]);
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  public static findAll(): Promise<IPostModel[]> {
    return new Promise((resolve: ({}) => {}, reject: ({}) => void) => {
      const repo = new PostRepository();

      repo.find().exec((err, res) => {
        if (err) {
          reject(err);
        } else {
          if (res.length) {
            resolve(res);
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  private postModel: IPostModel;

  constructor(postModel: IPostModel) {
    this.postModel = postModel;
  }
}

Object.seal(PostModel);
