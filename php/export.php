<?php
$db_config = parse_ini_file($_SERVER['DOCUMENT_ROOT'] . "/../private/db_config.ini");

$conn = new mysqli($db_config["servername"], $db_config["username"], $db_config["password"], $db_config["dbname"]);
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
    $result = $conn->query("SELECT wordlistid FROM wordlist WHERE wordlistid = '$id'");
} while($result->num_rows > 0);

$name = $_POST["name"]; 
$data = $_POST["data"]; 

$sql = "INSERT INTO wordlist (wordlistid, name, date, data) VALUES('$id', '$name', CURDATE(), '$data')";

if($conn->query($sql)) {
    echo $id;
} else {
    echo "ERROR";
}
?>