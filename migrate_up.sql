CREATE TABLE classes (
                id_classe INT AUTO_INCREMENT PRIMARY KEY,
                nom_classe VARCHAR(255) NOT NULL );

CREATE TABLE profs (
                id_prof INT AUTO_INCREMENT PRIMARY KEY,
                nom VARCHAR(255) NOT NULL,
                prenom VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                mot_de_passe VARCHAR(255) NOT NULL );

CREATE TABLE matieres (
                id_matiere INT AUTO_INCREMENT PRIMARY KEY,
                nom_module VARCHAR(255) NOT NULL,
                idClasseIdClasse INT,
                idProfIdProf INT,
                FOREIGN KEY (idClasseIdClasse) REFERENCES classes(id_classe),
                FOREIGN KEY (idProfIdProf) REFERENCES profs(id_prof) );

CREATE TABLE groupes (
                id_groupe INT AUTO_INCREMENT PRIMARY KEY,
                idClasseIdClasse INT,
                list_prof VARCHAR(255),
                FOREIGN KEY (idClasseIdClasse) REFERENCES classes(id_classe) );

CREATE TABLE etudiants (
                id_etudiant INT AUTO_INCREMENT PRIMARY KEY,
                nom_etudiant VARCHAR(255) NOT NULL,
                prenom_etudiant VARCHAR(255) NOT NULL,
                idGroupeIdGroupe INT,
                FOREIGN KEY (idGroupeIdGroupe) REFERENCES groupes(id_groupe) );

CREATE TABLE seances (
                id_seance INT AUTO_INCREMENT PRIMARY KEY,
                idGroupeIdGroupe INT,
                idMatiereIdMatiere INT,
                date_seance DATETIME NOT NULL,
                FOREIGN KEY (idGroupeIdGroupe) REFERENCES groupes(id_groupe),
                FOREIGN KEY (idMatiereIdMatiere) REFERENCES matieres(id_matiere) );

CREATE TABLE absences (
                id_absence INT AUTO_INCREMENT PRIMARY KEY,
                idEtudiantIdEtudiant INT,
                idSeanceIdSeance INT,
                etat_abs VARCHAR(255) NOT NULL,
                FOREIGN KEY (idEtudiantIdEtudiant) REFERENCES etudiants(id_etudiant),
                FOREIGN KEY (idSeanceIdSeance) REFERENCES seances(id_seance) );

INSERT INTO classes (nom_classe) VALUES
    ('ACI'),
    ('MASTER IA'),
    ('ACII');

INSERT INTO profs (nom, prenom, email, mot_de_passe) VALUES
    ('Achraf', 'Haibi', 'acharf@gmail.com', 'password123'),
    ('Samar', 'Mouchwarb', 'samar@gmail.com', 'password456');

INSERT INTO matieres (nom_module, idClasseIdClasse, idProfIdProf) VALUES
    ('Figma', 1, 1),
    ('Web avance', 2, 2);

INSERT INTO groupes (idClasseIdClasse, list_prof) VALUES
    (1, '1,2'),
    (2, '1,2');

INSERT INTO etudiants (nom_etudiant, prenom_etudiant, idGroupeIdGroupe) VALUES
    ('Lamrini', 'Hicham', 1),
    ('Oussama', 'Hajiri', 2);

INSERT INTO seances (idGroupeIdGroupe, idMatiereIdMatiere, date_seance) VALUES
    (1, 1, '2024-01-15 08:45:00'),
    (2, 2, '2024-01-16 13:30:00');

INSERT INTO absences (idEtudiantIdEtudiant, idSeanceIdSeance, etat_abs) VALUES
    (1, 1, 'Absent'),
    (2, 2, 'Present');