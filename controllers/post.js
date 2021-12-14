const Post = require("../models/Post");

class postController {
  static createPost = async (req, res, next) => {
    const { title, content } = req.body;
    const url = req.protocol + "://" + req.get("host");
    try {
      const result = await Post.create({
        title,
        content,
        imagePath: url + "/images/" + req.file.filename,
      });
      res.status(201).json({ success: true, result: result });
    } catch (error) {
      next(error);
    }
  };

  static getPosts = async (req, res, next) => {
    try {
      const result = await Post.find({});
      if (result.length === 0) {
        throw { name: "NOT_FOUND" };
      } else {
        res.status(200).json({ message: "success", result: result });
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = postController;
