import publicationModel from "../../models/publicationModel.js";

async function controllerGetByID(id) {
  const publication = await publicationModel.findByPk(id);
  return publication;
}

async function controllerGetAll() {
  const publication = await publicationModel.findAll();
  return publication;
}

// async function controllerGetByDate() {
//   const publication = await publicationModel.findAll({
//     order: [["created_at", "DESC"]],
//   });
//   return publication;
// }

async function controllerCreate(data) { 
  const result = await publicationModel.create(data);
  return result;
}

async function controllerRemove(id) {
  const result = await publicationModel.destroy({
    where: {
      publication_id: id,
    },
  });
  return result;
}

export default {
  controllerGetByID,
  // controllerGetAll,
  controllerCreate,
  controllerRemove,
};
