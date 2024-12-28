import { DataSource } from "typeorm";

let AppDataSource; // Declare variable for DataSource

export const initializeDataSource = async () => {
  // Dynamically import entities to avoid circular dependency issues
  const { Classe } = await import("./entities/classeEntity.js");
  const { Prof } = await import("./entities/profEntity.js");
  const { Matiere } = await import("./entities/matiereEntity.js");
  const { Groupe } = await import("./entities/groupeEntity.js");
  const { Etudiant } = await import("./entities/etudiantEntity.js");
  const { Seance } = await import("./entities/seanceEntity.js");
  const { Absence } = await import("./entities/absenceEntity.js");

  // Initialize the DataSource
  AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "gestion_absences",
    synchronize: false, // Change to true only for development
    logging: true,
    entities: [Classe, Prof, Matiere, Groupe, Etudiant, Seance, Absence],
    migrations: ["src/migrations/*.js"],
    subscribers: [],
  });

  return AppDataSource.initialize(); // Return the initialized DataSource
};

export { AppDataSource }; // Export the variable for use elsewhere
