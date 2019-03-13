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
       $path .= "/php/menu.php";
       include_once($path);
    ?>
    
    <?php
    if($_SERVER['SERVER_NAME'] == "localhost") {
        $server = "localhost";
        $username = "root";
        $password = "";
        $dbname = "glossary-tester";
    } else {
        $server = "localhost";
        $username = "mikkegki_mysql";
        $password = "p2VEHYe36wem";
        $dbname = "mikkegki_glossary-tester";
    }
    
    $conn = new mysqli($server, $username, $password, $dbname);
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
            } else {
                echo ("<br><p>No word list with the key <b>" . strtoupper($id) . "</b> exists!<p>");
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
