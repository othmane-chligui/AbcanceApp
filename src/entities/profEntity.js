import { EntitySchema } from "typeorm";

const Prof = new EntitySchema({
  name: "Prof",
  tableName: "profs",
  columns: {
    id_prof: {
      type: "int",
      primary: true,
      generated: true,
    },
    nom: {
      type: "varchar",
    },
    prenom: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    mot_de_passe: {
      type: "varchar",
    },
  },
});

export { Prof };
