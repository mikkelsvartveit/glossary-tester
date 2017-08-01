<!DOCTYPE html>

<html>

    <head>

        <title>Glossar Tester</title>
        
        <?php 
           $path = $_SERVER['DOCUMENT_ROOT'];
           $path .= "/de/php/head.php";
           include_once($path);
        ?>

    </head>
    
    <body>
    
        <?php 
           $path = $_SERVER['DOCUMENT_ROOT'];
           $path .= "/de/php/menu.php";
           include_once($path);
        ?>
        
        <div class="ingress">
        
            <h1>Letzte test-Ergebnis</h1>
        
        </div>
        
        <div id="testScore">
        
            <!-- Javascript goes here -->
            
        </div>
        
        <div class="content" id="testResult">
        
            <!-- Javascript goes here -->
            
        </div>
        
        <script src="last-test.js"></script>
    
    </body>

</html>