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
        
            <h1>Taking test</h1>
        
        </div>
        
        <div class="content" id="takeTest">
        
            <!-- Javascript goes here -->
            
        </div>
        
        <script src="take-test.js"></script>
    
    </body>

</html>