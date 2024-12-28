import express from "express";
import morgan from "morgan";
import { initializeDataSource } from "./data-source.js";

import { classeRouter } from "./routes/classeRouter.js";
import { profRouter } from "./routes/profRouter.js";
import { matiereRouter } from "./routes/matiereRouter.js";
import { groupeRouter } from "./routes/groupeRouter.js";
import { etudiantRouter } from "./routes/etudiantRouter.js";
import { seanceRouter } from "./routes/seanceRouter.js";
import { absenceRouter } from "./routes/absenceRouter.js";

const app = express(); // Initialize Express

// Use middlewares
app.use(morgan("combined"));
app.use(express.json());

// Mount routers
app.use("/api/classes", classeRouter);
app.use("/api/profs", profRouter);
app.use("/api/matieres", matiereRouter);
app.use("/api/groupes", groupeRouter);
app.use("/api/etudiants", etudiantRouter);
app.use("/api/seances", seanceRouter);
app.use("/api/absences", absenceRouter);

// Initialize DataSource and Start the Server
initializeDataSource()
  .then(() => {
    console.log("Data source initialized successfully.");
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize data source:", err);
  });
