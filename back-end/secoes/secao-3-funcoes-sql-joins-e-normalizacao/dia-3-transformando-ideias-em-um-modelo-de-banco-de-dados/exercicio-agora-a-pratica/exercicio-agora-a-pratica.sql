CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE localizacao(
	local_id INT PRIMARY KEY AUTO_INCREMENT,
    name_local VARCHAR(50) NOT NULL
) ENGINE=innoDB;

CREATE TABLE sexo(
	id_sexo INT PRIMARY KEY AUTO_INCREMENT,
    sexo_animal VARCHAR(50) NOT NULL
) ENGINE=innoDB;

CREATE TABLE especies(
	specie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome_especie VARCHAR(50) NOT NULL
) ENGINE=innoDB;

CREATE TABLE animal(
	ad_an INT PRIMARY KEY AUTO_INCREMENT,
    name_animal VARCHAR(50),
    especie_id INT NOT NULL,
    sexo_id INT NOT NULL,
    idade INT NOT NULL,
    local_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especies (specie_id),
    FOREIGN KEY (sexo_id) REFERENCES sexo (id_sexo),
    FOREIGN KEY (local_id) REFERENCES localizacao (local_id)
) ENGINE=innoDB;

CREATE TABLE gerente(
	id_gerente INT PRIMARY KEY AUTO_INCREMENT,
    name_gerente VARCHAR(50) NOT NULL
) ENGINE=innoDB;

CREATE TABLE cuidador(
	id_cuidador INT PRIMARY KEY AUTO_INCREMENT,
    nome_cuidador VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (id_gerente)
) ENGINE=innoDB;

CREATE TABLE animal_cuidador(
	animal_id INT,
    cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (ad_an),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (id_cuidador)
) ENGINE=innoDB;