import publicationController from "./publicationController.js";


async function getByID(req, res) {
  try {
    const id = req.params.id;
    const publication = await publicationController.controllerGetByID(id);
    res.json(publication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getAll(req, res) {
  try {
    const publication = await publicationController.controllerGetAll();
    res.json(publication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

// async function getByDate(req, res) {
//     try {
//         const publication = await publicationController.controllerGetByDate();
//         res.json(publication);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Server error" });
//     }
// }

async function create(req, res) {
  try {
    const response = await publicationController.controllerCreate(req.body);
    
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
    const response = await publicationController.controllerRemove(id);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAll,
  getByID,
  // getByDate,
  create,
  remove,
};
