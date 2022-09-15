<?php
include('dbconnection.php');
$data=stripcslashes(file_get_contents("php://input"));
$senddata=json_decode($data,true);
$inputdata=$senddata["value"];
if (!empty($inputdata)) {
    $sql="INSERT INTO `data`(`data`) VALUES ('$inputdata')";
        $result = mysqli_query($conn,$sql);
        if ($result) {
            echo "Your is entry has been successfully";
        }
        else{
            echo "inserting is fail";
        }
}else{
    echo "please fill data";
}

?>
