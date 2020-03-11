CREATE DATABASE prueba;

USE prueba;

--SHOW TABLES;

CREATE TABLE usuario (
  cedula INT NOT NULL PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  edad int,
  genero VARCHAR(50)
);

CREATE TABLE ciudad (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  ciudad VARCHAR(50)
);

--DESCRIBE usuario;

INSERT INTO usuario (cedula, nombre, apellido, edad, genero) values ('1012451644', 'camilo','caro','21','masculino');
INSERT INTO usuario (cedula, nombre, apellido, edad, genero) values ('3173350', 'fabio','caro','41','masculino');
INSERT INTO usuario (cedula, nombre, apellido, edad, genero) values ('1012475341', 'katerine','prada','22','femenino');
INSERT INTO usuario (cedula, nombre, apellido, edad, genero) values ('20976558', 'martha','robayo','40','femenino');

SELECT * FROM usuario;