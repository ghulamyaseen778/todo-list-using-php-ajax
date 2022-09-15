<?php
include('dbconnection.php');
$data=stripcslashes(file_get_contents("php://input"));
$senddata=json_decode($data,true);
$inputid=$senddata["id"];
$inputdata=$senddata["data"];
if (!empty($inputid)&& !empty($inputdata)) {
    $sql="UPDATE `data` SET `data` = '$inputdata' WHERE `id` = $inputid";
        $result = mysqli_query($conn,$sql);
        if ($result) {
            echo "updating has been successfully";
        }
        else{
            echo "updating is fail";
        }
}else{
    echo "please fill data";
}

?>