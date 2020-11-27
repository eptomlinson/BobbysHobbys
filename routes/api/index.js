const router = require("express").Router();
const hobbiesRoutes = require("./hobbies");

router.use("/hobbies", hobbiesRoutes);

module.exports = router;
