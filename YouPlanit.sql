-- ALL TABLES: can you make every table lowercase? it's good MySQL naming practice. if not it's okay

DROP DATABASE IF EXISTS Planit_You;
CREATE DATABASE Planit_You;
USE Planit_You;

DROP TABLE IF EXISTS Users;


-- Let's drop the career field. Gillian gave us feedback on our audience, it should be people looking to organize their lives, not just students
-- Or leave it and make it optional in case we have enough time at the end to make student functionality

CREATE TABLE Users (
    UserID varchar(50) AUTO_INCREMENT PRIMARY KEY,
    AccountName varchar(50) NOT NULL,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    Career varchar(50) NOT NULL
);

DROP TABLE IF EXISTS Contact;


-- Let's remove this table altogether, I think. Email should suffice for now.

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


-- Let's rename this to planits
-- End time should be nullable
-- make HabitType PlanitType (it will either be a goal or a habit)
-- make an array called DaysLogged (we will input days they logged into this array as a string)

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
