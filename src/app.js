import express from "express";
import configApp from "./config/app-config.js";

const port = process.env.PORT;
const app = express();
configApp(app);

app.listen(port, () => console.log(`listening on port ${port}!`));
