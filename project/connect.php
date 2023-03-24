<?php
$server_name = "localhost";
$user_name = "root";
$password = "";
$database_name = "database123";
$conn = mysqli_connect($server_name, $user_name, $password, $database_name);
if(!$conn)
{
    die("connection Failed:" . mysqli_connect_error());
}
if(isset($_POST['save']))
{
    $user_name = $_POST['user_name'];
    $email = $_POST['email'];
     $password = $_POST['password'];
   

$sql_query = "INSERT INTO entry_details(user_name,email,password) VALUES ('$user_name','$email','$password')";

if (mysqli_query($conn,$sql_query))
{
    echo"New Details Entry Inserted Successfully !";
}
else{
    echo"Error:".$sql."".mysqli_error($conn);
}
mysqli_close($conn);
}
?>

