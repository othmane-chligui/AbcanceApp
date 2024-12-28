import { EntitySchema } from "typeorm";

const Seance = new EntitySchema({
  name: "Seance",
  tableName: "seances",
  columns: {
    id_seance: {
      type: "int",
      primary: true,
      generated: true,
    },
    idGroupeIdGroupe: {
      type: "int",
    },
    idMatiereIdMatiere: {
      type: "int",
    },
    date_seance: {
      type: "datetime",
    },
  },
});

export { Seance };
