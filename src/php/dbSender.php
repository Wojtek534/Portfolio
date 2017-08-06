<?php
require_once "connect.php";
$title = $_POST["Title"];
$link = $_POST["Link"];
$text = $_POST["Text"];
$connect = @new mysqli($host, $db_user, $db_password, $db_name);
if ($connect->connect_errno!=0)
{
    echo "Error:".$connect->connect_errno."Opis:".$connect->connect_error;
}
else
{
    if (strlen($title) > 0 && substr($link, -3) == "jpg" && strlen($text) > 0)
    {
    $dbquerry = "INSERT INTO Palace (Name, Link, Description) VALUES ('$title','$link','$text')";
    $result = $connect->query($dbquerry);
    }
    else echo "Invalid data.";
}

?>