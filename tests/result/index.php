<!DOCTYPE html>

<html>

    <head>

        <title>Glossary tester</title>
        
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
        
        <div class="ingress">
        
            <h1>Your test result</h1>
        
        </div>
        
        <div id="testScore">
        
            <!-- Javascript goes here -->
            
        </div>
        
        <div class="content" id="testResult">
        
            <!-- Javascript goes here -->
            
        </div>
        
        <script src="result.js"></script>
    
    </body>

</html>