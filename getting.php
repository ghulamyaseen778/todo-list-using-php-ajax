<?php
include ("dbconnection.php");

$sql ="SELECT * FROM `data`";
$result = mysqli_query($conn, $sql);
$num = mysqli_num_rows($result);
if ($num>0) {
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[]=$row;
    }
}
echo json_encode($data);
?>