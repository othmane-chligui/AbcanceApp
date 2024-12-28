import { absenceService } from "../services/absenceService.js";

const absenceController = {
  getAll: async (req, res) => {
    try {
      const absences = await absenceService.getAll();
      res.json(absences);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const absence = await absenceService.getOne(req.params.id);
      res.json(absence);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const absence = await absenceService.create(req.body);
      res.status(201).json(absence);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const absence = await absenceService.update(req.params.id, req.body);
      res.json(absence);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await absenceService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};

export { absenceController };
