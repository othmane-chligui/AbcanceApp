import { profService } from "../services/profService.js";

const profController = {
  getAll: async (req, res) => {
    try {
      const profs = await profService.getAll();
      res.json(profs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const prof = await profService.getOne(req.params.id);
      res.json(prof);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const prof = await profService.create(req.body);
      res.status(201).json(prof);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, mot_de_passe } = req.body;
      if (!email || !mot_de_passe) {
        return res.status(400).json({ error: "Email and password are required" });
      }
      const result = await profService.login(email, mot_de_passe);
      res.json(result);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const prof = await profService.update(req.params.id, req.body);
      res.json(prof);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const result = await profService.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },
};

export { profController };
