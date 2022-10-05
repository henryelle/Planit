DROP DATABASE IF EXISTS YouPlanit;
CREATE DATABASE YouPlanit;
USE YouPlanit;

DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    UserID varchar(50) AUTO_INCREMENT PRIMARY KEY,
    AccountName varchar(50) NOT NULL,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    Career varchar(50) NOT NULL
);

DROP TABLE IF EXISTS Contact;

CREATE TABLE Contact (
    UserID varchar(50) AUTO_INCREMENT PRIMARY KEY,
    AccountName varchar(50) NOT NULL,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    Email varchar(50) NOT NULL,
    StudentID varchar(50) NOT NULL,
    Phone varchar(50) NOT NULL
);

DROP TABLE IF EXISTS Assignments;

CREATE TABLE Assignments (
    CourseID varchar(50) PRIMARY KEY NOT NULL,
    AssignmentType varchar(50) NOT NULL,
    AssignmentDescription varchar(50) NOT NULL,
    DueDate date NOT NULL,
);

DROP TABLE IF EXISTS Habits;

CREATE TABLE Habits (
    UserID varchar(50) AUTO_INCREMENT PRIMARY KEY,
    HabitType varchar(50) NOT NULL,
    HabitName varchar(50) NOT NULL,
    StartTime TIME NOT NULL,
    EndTime TIME NOT NULL,
);

DROP TABLE IF EXISTS Events;

CREATE TABLE Events (
    UserID varchar(50) AUTO_INCREMENT PRIMARY KEY,
    EventID varchar(50) NOT NULL
    EventName varchar(50) NOT NULL,
    EventDate DATE NOT NULL,
    StartTime TIME NOT NULL,
    EventAddress varchar(50) NOT NULL
);
