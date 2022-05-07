<?php
//db connection
$dbhost = 'localhost';
$dbuser = 'root';
$dbpassword = 'root';
$dbdatabase = 'loginapp';
$mysqli = new mysqli($dbhost, $dbuser, $dbpassword, $dbdatabase);


if ($mysqli === false) {
    die("ERROR: Could not connect. " . $mysqli->connect_error);
}
?>