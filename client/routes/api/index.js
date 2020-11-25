const router = require("express").Router();
const hobbiesRoutes = require("./hobbies");

// Book routes
router.use("/hobbies", hobbiesRoutes);

module.exports = router;
