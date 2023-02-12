const router = require("express").Router();
const controller = require("./url.controller");

router.route("/:urlId").get(controller.read).put(controller.update).delete(controller.destory)

router.route("/").get(controller.list).post(controller.create)

module.exports = router;
