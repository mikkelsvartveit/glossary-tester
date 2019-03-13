<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "glossary-tester";

$conn = new mysqli($server, $username, $password, $dbname);
$conn->set_charset('utf8');

function generateId() {
    $characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    $id = "";
    
    for($i = 0; $i < 4; $i++) {
        $id .= $characters[mt_rand(0, strlen($characters) - 1)];
    }
    
    return $id;
}

do {
    $id = generateId();
    $result = $conn->query("SELECT wordlistid FROM profile WHERE wordlistid = '$id'");
} while($result->num_rows > 0);

$name = $_POST["name"]; 
$data = $_POST["data"]; 

$sql = "INSERT INTO profile (wordlistid, name, date, data) VALUES('$id', '$name', CURDATE(), '$data')";
$conn->query($sql);

echo $id;
?>