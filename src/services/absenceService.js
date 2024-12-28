import { AppDataSource } from "../data-source.js";
import { Absence } from "../entities/absenceEntity.js";

const absenceService = {
  getAll: async () => {
    const repo = AppDataSource.getRepository(Absence);
    return await repo.find();
  },
  getOne: async (id) => {
    const repo = AppDataSource.getRepository(Absence);
    return await repo.findOneBy({ id_absence: id });
  },
  create: async (data) => {
    const repo = AppDataSource.getRepository(Absence);
    const absence = repo.create(data);
    return await repo.save(absence);
  },
  update: async (id, data) => {
    const repo = AppDataSource.getRepository(Absence);
    const absence = await repo.findOneBy({ id_absence: id });
    if (!absence) throw new Error("Absence not found");
    Object.assign(absence, data);
    return await repo.save(absence);
  },
  delete: async (id) => {
    const repo = AppDataSource.getRepository(Absence);
    const absence = await repo.findOneBy({ id_absence: id });
    if (!absence) throw new Error("Absence not found");
    await repo.remove(absence);
    return { message: "Absence deleted" };
  },
};

export { absenceService };
