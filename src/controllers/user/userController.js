// import { UserNameNotProvided, UserRoleIncorrect } from "../../utils/errors.js";
import { where } from "sequelize";
import userModel from "../../models/userModel.js";

async function controllerGetByID(id) {
  const user = await userModel.findByPk(id);
  return user;
}

async function controllerGetAll() {
  const user = await userModel.findAll();
  return user;
}

async function controllerGetByUsername(username) {
  const user = await userModel.findOne({
    where: { username: username },
  });
  return user;
}

async function controllerCreate(data) { 
  const result = await userModel.create(data);
  return result;
}

async function controllerEdit(id, data) {
  const result = await userModel.update(data, {
    where: {
      user_id: id,
    },
    order: [["created_at", "DESC"]]
  });
  const updatedUser = await userModel.findByPk(id);
  return updatedUser;
}

async function controllerRemove(id) {
  const result = await userModel.destroy({
    where: {
      user_id: id,
    },
  });
  return result;
}

export default {
  controllerGetByID,
  controllerGetByUsername,
  controllerGetAll,
  controllerCreate,
  controllerEdit,
  controllerRemove,
};
