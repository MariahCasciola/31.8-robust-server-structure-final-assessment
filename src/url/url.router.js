const router = require("express").Router();
const controller = require("./url.controller");

//import the uses router file
const usesRouter = require("../uses/uses.router");

const methodNotAllowed = require("../errors/methodNotAllowed");

//this should be added before any other routes, in order to nest routes
router.use("/:urlId/uses", controller.urlExists, usesRouter);

router
  .route("/:urlId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
