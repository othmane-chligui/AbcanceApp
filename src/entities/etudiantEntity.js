import { EntitySchema } from "typeorm";

const Etudiant = new EntitySchema({
  name: "Etudiant",
  tableName: "etudiants",
  columns: {
    id_etudiant: {
      type: "int",
      primary: true,
      generated: true,
    },
    nom_etudiant: {
      type: "varchar",
    },
    prenom_etudiant: {
      type: "varchar",
    },
    idGroupeIdGroupe: {
      type: "int",
    },
  },
});

export { Etudiant };
