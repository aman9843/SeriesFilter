const express = require("express");
const controller = require("../controllers/mernController");

const router = express.Router();

// @route

router.route("/").get(controller.getAll).post(controller.createNew);

// @route with some id

router.route("/:id").put(controller.updateById).delete(controller.deleteById);

module.exports = router;
