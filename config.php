<?php
//By KHALKI Elmehdi.
//MMPG Softwares Test Round 1.
//Database configuration.

//$servername = getenv('CLOUDSQL_DSN');
$inst = getenv('CLOUDSQL_DSN');
$username = getenv('CLOUDSQL_USER');
$password = getenv('CLOUDSQL_PASSWORD');
$dbname = getenv('CLOUDSQL_DB');
 
// Create connection
$conn = mysqli_connect(null, $username, $password, $dbname,null,$inst);
// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

?>