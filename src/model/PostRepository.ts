import {IPostModel, PostSchema} from "./PostModel";
import {RepositoryBase} from "./RespositoryBase";

export class PostRepository extends RepositoryBase<IPostModel> {
  constructor() {
    super(PostSchema);
  }
}

Object.seal(PostRepository);
