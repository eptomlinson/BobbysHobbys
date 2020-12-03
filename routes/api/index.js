const router = require("express").Router();
const hobbiesRoutes = require("./hobbies");
const userRoutes = require('./userRoutes');

router.use("/hobbies", hobbiesRoutes);
router.use('/users', userRoutes);

module.exports = router;
