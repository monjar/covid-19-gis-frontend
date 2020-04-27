import countriesController from "../controllers/CountriesController.js";
import errorController from "../controllers/ErrorController.js";
import express from "express";
const configApp = (app) => {
  app.use(express.static("public"));
  app.set("view engine", "ejs");
  app.use("/", countriesController);

  app.use("*", errorController);
};

export default configApp;
