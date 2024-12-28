import { AppDataSource } from "../data-source.js";
import { Prof } from "../entities/profEntity.js";
import bcrypt from "bcrypt";

const profService = {
  getAll: async () => {
    const repo = AppDataSource.getRepository(Prof);
    return await repo.find();
  },
  getOne: async (id) => {
    const repo = AppDataSource.getRepository(Prof);
    return await repo.findOneBy({ id_prof: id });
  },
  create: async (data) => {
    const repo = AppDataSource.getRepository(Prof);
    const saltRounds = 10;
    data.mot_de_passe = await bcrypt.hash(data.mot_de_passe, saltRounds);
    const prof = repo.create(data);
    return await repo.save(prof);
  },
  login: async (email, mot_de_passe) => {
    const repo = AppDataSource.getRepository(Prof);
    const prof = await repo.findOneBy({ email });
    if (!prof) throw new Error("Invalid email or password");
    const isMatch = await bcrypt.compare(mot_de_passe, prof.mot_de_passe);
    if (!isMatch) throw new Error("Invalid email or password");
    return { message: "Login successful", prof };
  },
  update: async (id, data) => {
    const repo = AppDataSource.getRepository(Prof);
    const prof = await repo.findOneBy({ id_prof: id });
    if (!prof) throw new Error("Prof not found");
    if (data.mot_de_passe) {
      const saltRounds = 10;
      data.mot_de_passe = await bcrypt.hash(data.mot_de_passe, saltRounds);
    }
    Object.assign(prof, data);
    return await repo.save(prof);
  },
  delete: async (id) => {
    const repo = AppDataSource.getRepository(Prof);
    const prof = await repo.findOneBy({ id_prof: id });
    if (!prof) throw new Error("Prof not found");
    await repo.remove(prof);
    return { message: "Prof deleted" };
  },
};

export { profService };
