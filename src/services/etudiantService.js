import { AppDataSource } from "../data-source.js";
import { Etudiant } from "../entities/etudiantEntity.js";

const etudiantService = {
  getAll: async () => {
    const repo = AppDataSource.getRepository(Etudiant);
    return await repo.find();
  },
  getOne: async (id) => {
    const repo = AppDataSource.getRepository(Etudiant);
    return await repo.findOneBy({ id_etudiant: id });
  },
  create: async (data) => {
    const repo = AppDataSource.getRepository(Etudiant);
    const etudiant = repo.create(data);
    return await repo.save(etudiant);
  },
  update: async (id, data) => {
    const repo = AppDataSource.getRepository(Etudiant);
    const etudiant = await repo.findOneBy({ id_etudiant: id });
    if (!etudiant) throw new Error("Etudiant not found");
    Object.assign(etudiant, data);
    return await repo.save(etudiant);
  },
  delete: async (id) => {
    const repo = AppDataSource.getRepository(Etudiant);
    const etudiant = await repo.findOneBy({ id_etudiant: id });
    if (!etudiant) throw new Error("Etudiant not found");
    await repo.remove(etudiant);
    return { message: "Etudiant deleted" };
  },
};

export { etudiantService };
