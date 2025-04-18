-- MySQL Script generated by MySQL Workbench
-- Fri Apr 18 13:08:41 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema atenea_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `atenea_db` ;

-- -----------------------------------------------------
-- Schema atenea_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `atenea_db` ;
USE `atenea_db` ;

-- -----------------------------------------------------
-- Table `atenea_db`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `atenea_db`.`user` ;

CREATE TABLE IF NOT EXISTS `atenea_db`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atenea_db`.`publication`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `atenea_db`.`publication` ;

CREATE TABLE IF NOT EXISTS `atenea_db`.`publication` (
  `publication_id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `text` VARCHAR(125) NOT NULL,
  `category` ENUM('event', 'post') NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`publication_id`),
  INDEX `fk_publication_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_publication_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `atenea_db`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atenea_db`.`event`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `atenea_db`.`event` ;

CREATE TABLE IF NOT EXISTS `atenea_db`.`event` (
  `event_id` INT NOT NULL AUTO_INCREMENT,
  `date_time` VARCHAR(45) NOT NULL,
  `saved` BIT NOT NULL,
  `publication_id` INT NOT NULL,
  PRIMARY KEY (`event_id`),
  INDEX `fk_event_publication1_idx` (`publication_id` ASC) VISIBLE,
  CONSTRAINT `fk_event_publication1`
    FOREIGN KEY (`publication_id`)
    REFERENCES `atenea_db`.`publication` (`publication_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `atenea_db`.`post`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `atenea_db`.`post` ;

CREATE TABLE IF NOT EXISTS `atenea_db`.`post` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(125) NOT NULL,
  `saved` BIT NOT NULL,
  `publication_post_id` INT NOT NULL,
  PRIMARY KEY (`post_id`),
  INDEX `fk_post_publication1_idx` (`publication_post_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_publication1`
    FOREIGN KEY (`publication_post_id`)
    REFERENCES `atenea_db`.`publication` (`publication_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
