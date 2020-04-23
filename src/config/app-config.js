// const gisRouter = require("../routers/gis-controller");
// const rootRouter = require("../routers/root-controller");
import countriesController from "../controllers/CountriesController.js";
const configApp = (app) => {
  app.set("view engine", "ejs");
  // app.use("/gis", gisRouter);
  app.use("/", countriesController);
};

export default configApp;
