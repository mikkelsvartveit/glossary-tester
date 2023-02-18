<!DOCTYPE html>

<html>

<head>

    <title>Import - Glossary Tester</title>

    <?php
       $path = $_SERVER['DOCUMENT_ROOT'];
       $path .= "/php/head.php";
       include_once($path);
    ?>

</head>

<body>

    <?php
       $path = $_SERVER['DOCUMENT_ROOT'];
       $path .= "/php/all.php";
       include_once($path);
    ?>
    
    <?php
    if (getenv("DOCKER") == "true") {
        $db_config = array(
            "servername" => getenv("DB_SERVER"),
            "username" => getenv("DB_USER"),
            "password" => getenv("DB_PASSWORD"),
            "dbname" => getenv("DB_NAME")
        );
    } else {
        $db_config = parse_ini_file($_SERVER['DOCUMENT_ROOT'] . "/../private/db_config.ini");
    }

    $conn = new mysqli($db_config["servername"], $db_config["username"], $db_config["password"], $db_config["dbname"]);
    $conn->set_charset('utf8');

    if(isset($_GET["i"])) {
        $id = $_GET["i"];
        
        $sql = "SELECT wordlistid, name, date, data FROM wordlist WHERE wordlistid = '$id'";
        $result = $conn->query($sql);
    }
    ?>
    
    <div class="content">
        
        <div class="ingress">
        
            <?php
            if($result->num_rows > 0) {
                $entry = mysqli_fetch_array($result);
                $importStorage = $entry["data"];
                
                echo "<h1>$entry[name]</h1>";
                echo "<p>Key: <b>" . strtoupper($entry['wordlistid']) . "</b></p>";
                echo "<p>Created on $entry[date]</p>";
                echo "<button id='importButton'>Import word list</button>";
            } else if(!$result) {
                echo "<h1>Error!</h1>";
                echo "<p>An error occured and we could not access the database. Please try again later. If the issue persists, please contact developer.</p>";
            } else {
                echo "<h1>Error!</h1>";
                echo "<p>No word list with the key <b>" . strtoupper($id) . "</b> exists!<p>";
            }
            ?>

        </div>
        
        <div id="wordTable"></div>
        
    </div>
    
    <div class="overlay hidden" id="confirmImportOverlay">
        <h3>Import word list?</h3>
        <p>This will overwrite your current word list.</p>
        <button type="button" id="confirmImportOverlayYesButton" class="float-left">Yes</button>
        <button type="button" id="confirmImportOverlayNoButton" class="float-right">Cancel</button>
    </div>
    
    <!-- Transfers variable from PHP to Javascript -->
    <script>var importStorage = JSON.parse('<?php echo $importStorage;?>');</script>
    <script src="/scripts/all.js"></script>
    <script src="/scripts/import.js"></script>

</body>

</html>
