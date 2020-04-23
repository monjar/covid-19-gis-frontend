import countriesController from "../controllers/CountriesController.js";
import express from "express";
const configApp = (app) => {
  app.use(express.static("public"));
  app.set("view engine", "ejs");
  app.use("/", countriesController);
};

export default configApp;
