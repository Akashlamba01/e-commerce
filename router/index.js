const express = require("express");
const router = express.Router();

router.use("/api/v1", require("./apiv1"));

module.exports = router;
