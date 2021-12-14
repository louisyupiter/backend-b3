const express = require("express");
const upload = require("../middlewares/file");

const postController = require("../controllers/post");

const router = express.Router();

router.post("", upload.single("imagePath"), postController.createPost);
router.get("", postController.getPosts);

module.exports = router;
