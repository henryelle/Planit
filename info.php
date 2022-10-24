<?php

//Connect to the Planit_You database on the MySQL server
$mysqli = new mysqli("199.231.187.232", "hosanna", "gillian", "Planit_You");
    if($mysqli->connect_error) {
    exit('Could not connect');
    }
// Next, take _POST Variables
    $accountname = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
//Database details
    $host = "199.231.187.232";
    $username = "hosanna";
    $password = "gillian";
    $dbname = "Planit_You";

//Insert new entries (a.k.a. new users) into the users table

    $sql = "INSERT INTO users (UserID, AccountName, FirstName, LastName, Password, Email) 
    VALUES ('0', '$accountname', '$firstname', '$lastname', '$password', '$email')";

    $insert = new_mysql_query($mysqli, $sql);

    if($insert){
        echo "A new user has been successfully created!";
    }
    else{
        echo "Error detected! Unable to create user!"
    }

?>