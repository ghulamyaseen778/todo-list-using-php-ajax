<?php
include('dbconnection.php');
$num=file_get_contents("php://input");
// $sendnumber=json_decode($num);
// $gettingNumber=$sendnumber["editValue"];
if (!empty($num)) {
    $sql="DELETE FROM `data` WHERE `data`.`id` = $num";
        $result = mysqli_query($conn,$sql);
        if ($result) {
            echo "Deleting has been successfully";
        }
        else{
            echo "deleting is fail";
        }
}else{
    echo "please try again";
}
// echo $num;
?>