import { AppDataSource } from "../data-source.js";
import { Groupe } from "../entities/groupeEntity.js";

const groupeService = {
  getAll: async () => {
    const repo = AppDataSource.getRepository(Groupe);
    return await repo.find();
  },
  getOne: async (id) => {
    const repo = AppDataSource.getRepository(Groupe);
    return await repo.findOneBy({ id_groupe: id });
  },
  create: async (data) => {
    const repo = AppDataSource.getRepository(Groupe);
    const groupe = repo.create(data);
    return await repo.save(groupe);
  },
  update: async (id, data) => {
    const repo = AppDataSource.getRepository(Groupe);
    const groupe = await repo.findOneBy({ id_groupe: id });
    if (!groupe) throw new Error("Groupe not found");
    Object.assign(groupe, data);
    return await repo.save(groupe);
  },
  delete: async (id) => {
    const repo = AppDataSource.getRepository(Groupe);
    const groupe = await repo.findOneBy({ id_groupe: id });
    if (!groupe) throw new Error("Groupe not found");
    await repo.remove(groupe);
    return { message: "Groupe deleted" };
  },
};

export { groupeService };
