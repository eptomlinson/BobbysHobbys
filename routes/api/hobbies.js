const router = require("express").Router();
const hobbiesController = require("../../client/controllers/hobbyController");

// Matches with "/api/books"
router.route("/")
  .get(hobbiesController.findAll)
  .post(hobbiesController.create);

// Matches with "/api/hobbies/:id"
router
  .route("/:id")
  .get(hobbiesController.findById)
  .put(hobbiesController.update)
  .delete(hobbiesController.remove);

module.exports = router;
