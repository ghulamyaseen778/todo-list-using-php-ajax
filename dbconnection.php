<?php
$server="localhost";
$username="root";
$pass="";
$dbname="tododata";

$conn = mysqli_connect($server,$username,$pass,$dbname);
if (!$conn) {
    dir("sorry your conection is fail ");
}
?>