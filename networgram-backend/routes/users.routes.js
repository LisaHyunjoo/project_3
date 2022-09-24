const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

// router
router.get("/register", (req, res) => {
  if (err) return res.status(404).json({ error: err.message });
  return res.status(200).json({
    user: req.session.currenUser,
    error: req.query.error,
  });
});
router.post("/register", ctrls.users.register);
router.get("/signin", (req, res) => {
  if (err) return res.status(404).json({ error: err.message });
  return res.status(404).json({
    user: req.session.currenUser,
    error: req.query.error,
  });
});
router.post("/signin", ctrls.users.signin);
router.get("/signout", (req, res) => {
  req.session.destroy();
});

module.exports = router;
