const router = require("express").Router();
const hobbiesController = require("../../client/controllers/hobbyController");

router.route("/")
  .get(hobbiesController.findAll)
  .post(hobbiesController.create);

router
  .route("/:id")
  .get(hobbiesController.findById)
  .put(hobbiesController.update)
  .delete(hobbiesController.remove);

module.exports = router;
