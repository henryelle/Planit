<?php
$dbServerName = "199.231.187.232";
$dbUsername = "hosanna";
$dbPassword = "gillian";
$dbName = "Planit_You";

// create connection
$conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    $echo "No.";
}
echo "Connected successfully";
?>