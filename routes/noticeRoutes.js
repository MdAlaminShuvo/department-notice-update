const express = require("express");
const noticeController = require("../controllers/noticeController");

const router = express.Router();

router
  .route("/")
  .get(noticeController.getAllNotice)
  .post(noticeController.createNotice);

router
  .route("/:id")
  .get(noticeController.getNotice)
  .patch(noticeController.updateNotice)
  .delete(noticeController.deleteNotice);
//export router
module.exports = router;
