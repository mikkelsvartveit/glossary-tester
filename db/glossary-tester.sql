-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema glossary-tester
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema glossary-tester
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `glossary-tester` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `glossary-tester` ;

-- -----------------------------------------------------
-- Table `glossary-tester`.`wordlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `glossary-tester`.`wordlist` (
  `wordlistid` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `date` DATE NOT NULL,
  `data` TEXT(65535) NOT NULL,
  PRIMARY KEY (`wordlistid`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
