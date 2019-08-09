import {Router} from "express";
import {PostModel} from "../model/PostModel";

const postController = (router: Router) => {
  router.post("/create_post", (request, response) => {
    const post = request.body;
    if (!post.title || !post.text) {
      response.status(400);
      response.send("Fields required are title, text");
    }
    PostModel.createPost(post.title, post.text)
      .then((res: {}) => {
        console.log("## Created post");
        console.log(res);
        response.sendStatus(201);
      }).catch((err: {}) => {
        console.log(`Error saving post: ${err}`);
        response.sendStatus(500);
      });
  });

  router.get("/list_all_posts", ((request, response) => {
    PostModel.findAll()
      .then((res: {}) => {
        response.status(200);
        response.send(res);
      }).catch((err: {}) => {
        response.status(500);
        response.send(err);
    });
  }));

  return router;
};

export default postController;
