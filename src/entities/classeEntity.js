import { EntitySchema } from "typeorm";

const Classe = new EntitySchema({
  name: "Classe",
  tableName: "classes",
  columns: {
    id_classe: {
      type: "int",
      primary: true,
      generated: true,
    },
    nom_classe: {
      type: "varchar",
    },
  },
});

export { Classe };
