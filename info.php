<?php
if(isset($_POST['submit']))
{
//Connect to the Planit_You database on the MySQL server
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

    $mysqli = new mysqli("199.231.187.232", "hosanna", "gillian", "Planit_You");
    if($mysqli->connect_error) {
    exit('Could not connect');
    }
//Insert new entries (a.k.a. new users) into the users table

    $sql = "INSERT INTO users (UserID, AccountName, FirstName, LastName, Password, Email) 
    VALUES ('0', '$accountname', '$firstname', '$lastname', '$password', '$email')";

    if($mysqli->query($sql) === TRUE){
        echo "A new user has been successfully created!";
    }
    else{
        echo "Error detected! Unable to create user!"
    }

    $mysqli->close();
}
?>