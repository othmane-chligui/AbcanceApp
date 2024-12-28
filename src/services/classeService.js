import { AppDataSource } from "../data-source.js";
import { Classe } from "../entities/classeEntity.js";

const classeService = {
  getAll: async () => {
    const repo = AppDataSource.getRepository(Classe);
    return await repo.find();
  },
  getOne: async (id) => {
    const repo = AppDataSource.getRepository(Classe);
    return await repo.findOneBy({ id_classe: id });
  },
  create: async (data) => {
    const repo = AppDataSource.getRepository(Classe);
    const classe = repo.create(data);
    return await repo.save(classe);
  },
  update: async (id, data) => {
    const repo = AppDataSource.getRepository(Classe);
    const classe = await repo.findOneBy({ id_classe: id });
    if (!classe) throw new Error("Classe not found");
    Object.assign(classe, data);
    return await repo.save(classe);
  },
  delete: async (id) => {
    const repo = AppDataSource.getRepository(Classe);
    const classe = await repo.findOneBy({ id_classe: id });
    if (!classe) throw new Error("Classe not found");
    await repo.remove(classe);
    return { message: "Classe deleted" };
  },
};

export { classeService };
