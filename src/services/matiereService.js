import { AppDataSource } from "../data-source.js";
import { Matiere } from "../entities/matiereEntity.js";

const matiereService = {
  getAll: async () => {
    const repo = AppDataSource.getRepository(Matiere);
    return await repo.find();
  },
  getOne: async (id) => {
    const repo = AppDataSource.getRepository(Matiere);
    return await repo.findOneBy({ id_matiere: id });
  },
  create: async (data) => {
    const repo = AppDataSource.getRepository(Matiere);
    const matiere = repo.create(data);
    return await repo.save(matiere);
  },
  update: async (id, data) => {
    const repo = AppDataSource.getRepository(Matiere);
    const matiere = await repo.findOneBy({ id_matiere: id });
    if (!matiere) throw new Error("Matiere not found");
    Object.assign(matiere, data);
    return await repo.save(matiere);
  },
  delete: async (id) => {
    const repo = AppDataSource.getRepository(Matiere);
    const matiere = await repo.findOneBy({ id_matiere: id });
    if (!matiere) throw new Error("Matiere not found");
    await repo.remove(matiere);
    return { message: "Matiere deleted" };
  },
};

export { matiereService };
