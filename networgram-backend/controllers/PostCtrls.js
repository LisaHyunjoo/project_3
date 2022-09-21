const db = require("../models");

const index = (req, res) => {
  db.Post.find({}, (err, post) => {
    if (err) return res.status(404).json({ error: err.message });
    return res.status(200).json({
      post,
      requestedAt: new Date().toLocaleDateString(),
    });
  });
};

const create = (req, res) => {
  db.Post;
};

module.exports = {
  index,
};
