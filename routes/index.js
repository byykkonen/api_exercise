import express from "express";
import employeeRouter from "./employees.route";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("working");
});

router.use("/employees", employeeRouter);


export default router;
