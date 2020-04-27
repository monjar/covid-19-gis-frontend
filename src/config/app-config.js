import countriesController from "../controllers/CountriesController.js";
import errorController from "../controllers/ErrorController.js";
import express from "express";
const configApp = (app) => {
  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use("/", countriesController);

  app.use("*", errorController);
};

export default configApp;
