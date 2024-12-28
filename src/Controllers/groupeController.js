import { groupeService } from "../services/groupeService.js";

const groupeController = {
  getAll: async (req, res) => {
    try {
      const groupes = await groupeService.getAll();
      res.json(groupes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const groupe = await groupeService.getOne(req.params.id);
      res.json(groupe);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const groupe = await groupeService.create(req.body);
      res.status(201).json(groupe);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const groupe = await groupeService.update(req.params.id, req.body);
      res.json(groupe);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await groupeService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};

export { groupeController };
