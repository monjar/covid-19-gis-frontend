import express from "express";
import getCountriesList from "../services/CountriesService.js";
const router = express.Router();

const successView = (res, viewName) => {
  return (data) => res.render(viewName, { data: data.locations });
};

const errorView = (res, viewName) => {
  return () => res.render(viewName);
};

router.get("/", (req, res) => {
  getCountriesList(successView(res, "list"), errorView(res, "err"));
});

export default router;
