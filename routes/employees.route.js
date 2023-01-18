import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      [data] = await employees.findOne(parseInt(id));
      console.log(data[0]);
    } else {
      data = await employees.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newEmployee = req.body;
    let data = await employees.addOne(newEmployee);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let updatedEmployee = req.body;
    let data = await employees.updateOne(updatedEmployee, id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await employees.removeOne(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
