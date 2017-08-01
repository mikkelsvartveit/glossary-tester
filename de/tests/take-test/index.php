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
        
            <h1>Test nehmen</h1>
        
        </div>
        
        <div class="content" id="takeTest">
        
            <!-- Javascript goes here -->
            
        </div>
        
        <script src="take-test.js"></script>
    
    </body>

</html>