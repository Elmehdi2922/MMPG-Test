-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 12 oct. 2020 à 14:09
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mmpgtest`
--

-- --------------------------------------------------------

--
-- Structure de la table `city`
-- ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `city`;
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `introduction` varchar(250) NOT NULL,
  `details` varchar(500) NOT NULL,
  `nombre_visite` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `city`
--

INSERT INTO `city` (`id`, `name`, `introduction`, `details`, `nombre_visite`) VALUES
(1, 'Casablanca', 'Casablanca est une ville situee au centre-ouest du Maroc. Capitale economique du pays5,6 et plus grande ville du Maghreb par la population7, elle est situee sur la cote atlantique, a environ 80 km au sud de Rabat, la capitale administrative.', 'Sur le plan administratif, son territoire a distinguer de celui de l\'agglomeration incluant sa banlieue d\'une superficie de 384 km23, correspond a celui de la prefecture de Casablanca, chef-lieu de la region Casablanca-Settat. ', 137),
(2, 'Rabat', 'La ville est situee au bord de l\'Atlantique au nord-ouest du Maroc, a 40 km au sud de Kenitra et 240 km au sud-ouest de Tanger et du detroit de Gibraltar, et a 87 km au nord-est de Casablanca.', 'Sur le plan administratif, son territoire a distinguer de celui de lagglomeration rabataise incluant sa banlieue  d\'une superficie de 118,5 km27, correspond a celui de la prefecture de Rabat qui, depuis le retour au principe de l\'unite de la ville en 20028, est composee d\'une part de la commune urbaine de Rabat, divisee en cinq arrondissements ; d\'autre part de la commune urbaine de Touarga, ou se situe le palais royal, enclavee dans la premiere.', 92),
(3, 'Fes', 'Fes est une ville du Maroc septentrional, situee a 180 km a l\'est de Rabat, entre le massif du Rif et le Moyen Atlas. Faisant partie des villes imperiales du Maroc.', 'Elle s\'etend sur trois secteurs : la ville ancienne (medina), classee au patrimoine mondial de l\'UNESCO9, l\'enceinte royale et les quartiers nouveaux, etablis par les Francais, et qui s\'etendent de nos jours dans la plaine environnante. Sur le plan ede la municipalite de Fes (divisee en six arrondissements) et de la municipalite de Mechouar Fes Jdid (ou se trouve le palais royal). ', 107);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
