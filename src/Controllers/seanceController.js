import { seanceService } from "../services/seanceService.js";

const seanceController = {
  getAll: async (req, res) => {
    try {
      const seances = await seanceService.getAll();
      res.json(seances);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const seance = await seanceService.getOne(req.params.id);
      res.json(seance);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const seance = await seanceService.create(req.body);
      res.status(201).json(seance);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const seance = await seanceService.update(req.params.id, req.body);
      res.json(seance);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await seanceService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};

export { seanceController };
