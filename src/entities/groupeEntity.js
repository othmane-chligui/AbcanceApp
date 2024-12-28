import { EntitySchema } from "typeorm";

const Groupe = new EntitySchema({
  name: "Groupe",
  tableName: "groupes",
  columns: {
    id_groupe: {
      type: "int",
      primary: true,
      generated: true,
    },
    idClasseIdClasse: {
      type: "int",
    },
    list_prof: {
      type: "varchar",
    },
  },
});

export { Groupe };
