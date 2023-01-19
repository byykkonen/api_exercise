import query from "../db/utils";

const findAll = async () => {
  return await query(
    "SELECT id, first_name, last_name, EmailAddress FROM employees"
  );
};

const findOne = async (employeeID) => {
  return await query(
    "SELECT id, first_name, last_name, EmailAddress FROM employees WHERE id = ?",
    [employeeID]
  );
};

const addOne = async (newEmployee) => {
  return await query("INSERT INTO employees SET ?", [newEmployee]);
};

const updateOne = async (updatedEmployee) => {
  return await query("UPDATE employees SET ? WHERE id = ?", [
    updatedEmployee,
    id,
  ]);
};

const removeOne = async (EmployeeID) => {
  return await query("DELETE FROM employees WHERE id = ?", [
    EmployeeID,
  ]);
};

export default { findAll, findOne, addOne, updateOne, removeOne };
