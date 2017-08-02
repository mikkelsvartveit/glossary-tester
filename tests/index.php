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
        
            <h1>Glossary tests</h1>
            <p>View your last test result, or start a new test.</p>
        
        </div>
        
        <div>
            
            <div id="lastResult">

                <h2>Last test result</h2>
                
                <p id="lastTestComment">In your last test, you got <span id="correctWords"></span> of <span id="totalWords"></span> words right. <a href="/tests/last-test" class="link">Show details</a>.</p>
                <p id="noTestComment">You have not completed any tests yet. When you take a test, the result will show up here.</p>

            </div>

            <div>

                <h2>New test</h2>
                <p>Click the button to start a new glossary test.</p>
                <button class="center" onclick="location.href='/tests/take-test';">Start new test</button>

            </div>
        
        </div>
        
        <script src="/scripts/tests.js"></script>
    
    </body>

</html>