import {Router} from "Express";

const healthController = (router: Router) => {
  router.get("/heart_beat", (request, response) => {
    response.sendStatus(200);
  });
  return router;
};

export default healthController;
