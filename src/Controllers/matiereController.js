import { matiereService } from "../services/matiereService.js";

const matiereController = {
  getAll: async (req, res) => {
    try {
      const matieres = await matiereService.getAll();
      res.json(matieres);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const matiere = await matiereService.getOne(req.params.id);
      res.json(matiere);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const matiere = await matiereService.create(req.body);
      res.status(201).json(matiere);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const matiere = await matiereService.update(req.params.id, req.body);
      res.json(matiere);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await matiereService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};

export { matiereController };
