$dbServerName = "199.231.187.232";
$dbUsername = "root";
$dbPassword = "very_strong_password";
$dbName = "Planit_You";

// create connection
$conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

$sql = "SELECT *";
$stmt = $conn->prepare($sql);
$stmt->execute();

// check connection
// if ($conn->connect_error) {
//     $echo "No.";
// }
// echo "Connected successfully";
