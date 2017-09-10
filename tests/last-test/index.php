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

    <div class="page">
       
        <div class="ingress">

            <h1>Last test result</h1>
            
            <div id="testScore">

                <p id="resultComment">On your last test, you got <b id="correctWords"></b> of <b id="totalWords"></b> words right.</p>

            </div>

        </div>

        <div id="testResult">

            <p id="sampleElement" class="hidden">
                <span class="originalWord"></span> =
                <span class="answer"></span>
                <span class="correctComment hidden"> (correct answer was <b class="correctWord"></b>)
                </span>
            </p>

        </div>
        
    </div>

    <script src="/scripts/last-test.js"></script>

</body>

</html>
