const express = require("express");
const indexController = require("./controllers/index-controller");
const loginController = require("./controllers/login-controller");
const dashboardIndexController = require("./controllers/dashboard/index-controller");
const dashboardTasksController = require("./controllers/dashboard/tasks-controller");

const router = express.Router();

router.get("/", indexController.get);
router.get("/login", loginController.get);
router.post("/login", loginController.post);
router.get("/dashboard", dashboardIndexController.get);
router.get("/dashboard/tasks", dashboardTasksController.get);

module.exports = router;
