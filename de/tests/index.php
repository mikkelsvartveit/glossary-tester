<!DOCTYPE html>

<html>

    <head>

        <title>Glossary tester</title>
        
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
        
            <h1>Glossary tests</h1>
            <p>Siehst du deine letzte test-Ergebnis, oder startest du einen neuen test.</p>
        
        </div>
        
        <div>
            
            <div id="lastResult">

                <h2>Letzte test-Ergebnis</h2>
                
                <p id="lastTestComment">In deine letzten test, hast du <span id="correctWords"></span> von <span id="totalWords"></span> richtigen Worte. <a href="/Tysk/tests/last-test" class="link">Details anzeigen.</a>.</p>
                <p id="noTestComment">Du nicht hast abgeschlossen jeder tests noch. Wenn du einen test nehmen, das Ergebnis wird zeigen, bis hier.</p>

            </div>

            <div>

                <h2>Neuer test</h2>
                <p>Klicken Sie auf die Schaltfläche starten, um ein neues Glossar zu testen.</p>
                <button class="center" onclick="location.href='/Tysk/tests/take-test';">Starten einen neuen test</button>

            </div>
        
        </div>
        
        <script src="tests.js"></script>
    
    </body>

</html>