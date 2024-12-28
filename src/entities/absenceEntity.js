import { EntitySchema } from "typeorm";

const Absence = new EntitySchema({
  name: "Absence",
  tableName: "absences",
  columns: {
    id_absence: {
      type: "int",
      primary: true,
      generated: true,
    },
    idEtudiantIdEtudiant: {
      type: "int",
    },
    idSeanceIdSeance: {
      type: "int",
    },
    etat_abs: {
      type: "varchar",
    },
  },
});

export { Absence };
