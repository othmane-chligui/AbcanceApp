import { classeService } from "../services/classeService.js";

const classeController = {
  getAll: async (req, res) => {
    try {
      const classes = await classeService.getAll();
      res.json(classes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const classe = await classeService.getOne(req.params.id);
      res.json(classe);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const classe = await classeService.create(req.body);
      res.status(201).json(classe);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const classe = await classeService.update(req.params.id, req.body);
      res.json(classe);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await classeService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};

export { classeController };
