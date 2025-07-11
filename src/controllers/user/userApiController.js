import userController from "./userController.js";
import { hash } from "../../utils/bcrypt.js";


async function getByID(req, res) {
  try {
    const id = req.params.id;
    const user = await userController.controllerGetByID(id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getByUsername(req, res) {
  try {
    const { username } = req.params;
    console.log(username);
    if (!username) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }
 
    const user = await userController.controllerGetByUsername(username);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });    
  }
}

async function getAll(req, res) {
  try {
    const user = await userController.controllerGetAll();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function create(req, res) {
  try {
    req.body.password = await hash(req.body.password);
    const response = await userController.controllerCreate(req.body);
    
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function edit(req, res) {
  try {
    req.body.password = await hash(req.body.password);

    const id = req.params.id;
    const response = await userController.controllerEdit(id, req.body);
    res.json(response);
  } catch (error) {
    console.error(error);
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    const response = await userController.controllerRemove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAll,
  getByID,
  getByUsername,
  create,
  edit,
  remove,
};