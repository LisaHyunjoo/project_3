const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

// router
router.get("/register", (req, res) => {});
router.post("/register", ctrls.users.register);
router.get("/signin", (req, res) => {});
router.post("/signin", ctrls.users.signin);
router.get("/signout", (req, res) => {
  req.session.destroy();
});

module.exports = router;
