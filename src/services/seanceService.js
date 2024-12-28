import { AppDataSource } from "../data-source.js";
import { Seance } from "../entities/seanceEntity.js";

const seanceService = {
  getAll: async () => {
    const repo = AppDataSource.getRepository(Seance);
    return await repo.find();
  },
  getOne: async (id) => {
    const repo = AppDataSource.getRepository(Seance);
    return await repo.findOneBy({ id_seance: id });
  },
  create: async (data) => {
    const repo = AppDataSource.getRepository(Seance);
    const seance = repo.create(data);
    return await repo.save(seance);
  },
  update: async (id, data) => {
    const repo = AppDataSource.getRepository(Seance);
    const seance = await repo.findOneBy({ id_seance: id });
    if (!seance) throw new Error("Seance not found");
    Object.assign(seance, data);
    return await repo.save(seance);
  },
  delete: async (id) => {
    const repo = AppDataSource.getRepository(Seance);
    const seance = await repo.findOneBy({ id_seance: id });
    if (!seance) throw new Error("Seance not found");
    await repo.remove(seance);
    return { message: "Seance deleted" };
  },
};

export { seanceService };
