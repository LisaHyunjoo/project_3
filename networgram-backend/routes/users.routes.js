const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

// router
router.get("/register", (req, res) => {
  req.session.currenUser, req.query.error;
});
router.post("/register", ctrls.users.register);
router.get("/signin", (req, res) => {
  req.session.currentUser, req.query.error;
});
router.post("/signin", ctrls.users.signin);
router.get("/signout", (req, res) => {
  req.session.destroy();
});

module.exports = router;
