<!DOCTYPE html>

<html>

<head>

    <title>Tests - Glossary Tester</title>

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
    
    <div class="content">

            <div class="ingress">

                <h1>Glossary tests</h1>
                <p>View your last test result, or start a new test.</p>

            </div>

                <div id="lastResult" class="page">

                    <h2>Last test result</h2>

                    <p id="lastTestComment" class="hidden">In your last test, you got <span id="correctWords"></span> of <span id="totalWords"></span> words right. <a href="/tests/last-test" class="link">Show details</a>.</p>
                    <p id="noTestComment" class="hidden">You have not completed any tests yet. When you take a test, the result will show up here.</p>

                </div>

                <div class="page">

                    <h2>New test</h2>
                    <p>Click the button to start a new glossary test.</p>
                    <div class="center"><button onclick="location.href='/tests/take-test';">Start new test</button></div>

                </div>

        </div>
        
    </div>

    <script src="/scripts/all.js"></script>
    <script src="/scripts/tests.js"></script>

</body>

</html>
