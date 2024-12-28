import { EntitySchema } from "typeorm";

const Matiere = new EntitySchema({
  name: "Matiere",
  tableName: "matieres",
  columns: {
    id_matiere: {
      type: "int",
      primary: true,
      generated: true,
    },
    nom_module: {
      type: "varchar",
    },
    idClasseIdClasse: {
      type: "int",
    },
    idProfIdProf: {
      type: "int",
    },
  },
});

export { Matiere };
