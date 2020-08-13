CREATE DATABASE  IF NOT EXISTS `engelive` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `engelive`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: engelive
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `materiais`
--

DROP TABLE IF EXISTS `materiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idtenant` int NOT NULL,
  `idtipo` int NOT NULL,
  `nome` varchar(200) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idmaterial_UNIQUE` (`id`),
  KEY `fk_material_tipo_idx` (`idtipo`),
  KEY `fk_material_tenant_idx` (`idtenant`),
  CONSTRAINT `fk_material_tenant` FOREIGN KEY (`idtenant`) REFERENCES `tenants` (`id`),
  CONSTRAINT `fk_material_tipo` FOREIGN KEY (`idtipo`) REFERENCES `tipos_materiais` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plantas`
--

DROP TABLE IF EXISTS `plantas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plantas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idtenant` int NOT NULL,
  `idprojeto` int NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `imagem` longblob,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idplanta_UNIQUE` (`id`),
  KEY `fk_planta_projeto_idx` (`idprojeto`),
  KEY `fk_planta_tenant_idx` (`idtenant`),
  CONSTRAINT `fk_planta_projeto` FOREIGN KEY (`idprojeto`) REFERENCES `projetos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_planta_tenant` FOREIGN KEY (`idtenant`) REFERENCES `tenants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plantas_materiais`
--

DROP TABLE IF EXISTS `plantas_materiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plantas_materiais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idtenant` int NOT NULL,
  `idplanta` int NOT NULL,
  `idmaterial` int NOT NULL,
  `coordenadaX` int NOT NULL,
  `coordenadaY` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idplanta_materiais_UNIQUE` (`id`),
  KEY `fk_pm_planta_idx` (`idplanta`),
  KEY `fk_pm_material_idx` (`idmaterial`),
  KEY `fk_pm_tenant_idx` (`idtenant`),
  CONSTRAINT `fk_pm_material` FOREIGN KEY (`idmaterial`) REFERENCES `materiais` (`id`),
  CONSTRAINT `fk_pm_planta` FOREIGN KEY (`idplanta`) REFERENCES `plantas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_pm_tenant` FOREIGN KEY (`idtenant`) REFERENCES `tenants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=473 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `projetos`
--

DROP TABLE IF EXISTS `projetos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projetos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idtenant` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `previsao` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idprojeto_UNIQUE` (`id`),
  KEY `fk_projeto_tenant_idx` (`idtenant`),
  CONSTRAINT `fk_projeto_tenant` FOREIGN KEY (`idtenant`) REFERENCES `tenants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tenants`
--

DROP TABLE IF EXISTS `tenants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tenants` (
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipos_materiais`
--

DROP TABLE IF EXISTS `tipos_materiais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_materiais` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idtenant` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `marcador` int NOT NULL,
  `cor` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idtipo_material_UNIQUE` (`id`),
  KEY `fk_tm_tenant_idx` (`idtenant`),
  CONSTRAINT `fk_tm_tenant` FOREIGN KEY (`idtenant`) REFERENCES `tenants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idtenant` int NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `email` varchar(300) NOT NULL,
  `senha` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario_tenant_idx` (`idtenant`),
  CONSTRAINT `fk_usuario_tenant` FOREIGN KEY (`idtenant`) REFERENCES `tenants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-12 22:41:06
