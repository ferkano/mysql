import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "algo fue mal" });
  }
};

export const getEmployee = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
    req.params.id,
  ]);

  if (rows.length <= 0)
    return res.status(404).json({
      message: "Employee not found",
    });
  res.json(rows[0]);
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES (?,?)",
    [name, salary]
  );
  res.send({ id: rows.insertId, name, salary });
};

export const deleteEmployes = async (req, res) => {
  const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows <= 0) {
    return res.status(404).json({ message: "employee not found" });
  }
  res.sendStatus(204);
};

export const updateEmployes = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  const [result] = await pool.query(
    "UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ?",
    [name, salary, id]
  );

  if (result.affectedRows === 0)
    return res.status(404).json({ message: "employee not found" });
  console.log(result);

  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

  res.json(rows[0]);
};
