import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import carsRouter from "./routes/carsRouter.js";
import handleErrorsMiddleware from "./middlewares/errorHandlerMiddleware.js";
dotenv.config();
var app = express();
app.use(json());
app.use(carsRouter);
app.use(handleErrorsMiddleware);
var port = +process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server is up and running on port: ".concat(port));
});
