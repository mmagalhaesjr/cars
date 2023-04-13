import { Router } from "express";
import carsRouter from "./carsRouter.js";
var router = Router();
router.use(carsRouter);
export default router;
