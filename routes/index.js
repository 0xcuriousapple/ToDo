const router = require("express").Router();
const taskRoutes = require("./tasks");
const userRoutes = require("./user");
const path = require("path");

router.use("/api/list", taskRoutes);
router.use("/api/user", userRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;
