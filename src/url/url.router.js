const router = require("express").Router();
const controller = require("./url.controller");

//import the uses router file
const usesRouter = require("../uses/uses.router");

//this should be added before any other routes, in order to nest routes
router.use("/:urlId/uses", controller.urlExists, usesRouter);

router
  .route("/:urlId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destory);

router.route("/").get(controller.list).post(controller.create);

module.exports = router;
