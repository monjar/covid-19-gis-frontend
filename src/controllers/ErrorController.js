import express from "express";
import getLogger from "../config/logger-config.js";
const logger = getLogger("errors");
const router = express.Router();

router.get("*", (req, res) => {
  //   logger.error(`request to ${req.url} not found`);
  res.render("notfound");
});

export default router;
