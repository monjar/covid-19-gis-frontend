import express from "express";
import getCountriesList from "../services/CountriesService.js";
import asyncHandler from "express-async-handler";
const router = express.Router();
const renderViewOnResponse = (res, viewName) => {
  return (data) => {
    console.log(JSON.stringify(data));
    res.render(viewName);
  };
};
router.get("/", (req, res) => {
  getCountriesList(renderViewOnResponse(res, "list"));
});

export default router;
