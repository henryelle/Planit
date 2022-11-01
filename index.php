<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <script type="text/javascript" src="./app.js"></script>
  </head>
  <body>
	  <h1>Hello, Capstone!</h1>
    <div id="main-div">
      <h2>Welcome to Planit You</h2>
      <h3>An adventure-based habit tracker, mood journal, and planner.</h3>
      <h3>Henry</h3>
      <h3>Caelen</h3>
      <h3>Hosanna x2</h3>
      <h3>Alivia x3</h3>
      <?php
print "<p>PHP DAYO! from henry's log in from root log in maybe 1</p>";
?> 
<?php
$user = "hosanna";
$password = "gillian";
$database = "Planit_You";
$table = "Users";

try {
  $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
  echo "<h2>TODO</h2><ol>"; 
  foreach($db->query("SELECT * FROM $table") as $row) {
    echo "<li>" . $row['AccountName'] . "</li>";
    echo "<li>" . $row['LastName'] . "</li>";
  }
  echo "</ol>";
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
    </div>
  </body>
</html>
