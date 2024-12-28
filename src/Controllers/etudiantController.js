import { etudiantService } from "../services/etudiantService.js";

const etudiantController = {
  getAll: async (req, res) => {
    try {
      const etudiants = await etudiantService.getAll();
      res.json(etudiants);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const etudiant = await etudiantService.getOne(req.params.id);
      res.json(etudiant);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const etudiant = await etudiantService.create(req.body);
      res.status(201).json(etudiant);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const etudiant = await etudiantService.update(req.params.id, req.body);
      res.json(etudiant);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await etudiantService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};

export { etudiantController };
