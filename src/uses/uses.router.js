const router = require("express").Router({mergeParams: true});
const controller = require("./uses.controller");

router.route("/:useId").get(controller.read).delete(controller.destory);

router.route("/").get(controller.list);

module.exports = router;