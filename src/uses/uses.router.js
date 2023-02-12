const router = require("express").Router();
const controller = require("./uses.controller");

router.route("/:useId").get(controller.read).delete(controller.destory);

router.route("/").get(controller.list);
