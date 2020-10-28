<?php
//By KHALKI Elmehdi.
//MMPG Softwares Test Round 1.
//Database configuration.



// Create connection
$conn = mysqli_connect("localhost", "root", "", "mmpgtest");
// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

?>