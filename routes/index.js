import express from "express";
// TODO: import router from users.route
import userRouter from "./users.route";
import employeeRouter from "./employees.route";
import productRouter from "./products.routes";


const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
router.use("/users", userRouter);

router.use("/employees", employeeRouter);

router.use("/products", productRouter);


export default router;
