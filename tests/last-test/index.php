<!DOCTYPE html>

<html>

<head>

    <title>Last test - Glossary Tester</title>

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
    
    <div class="content">
        
        <h1>Last test result</h1>
        
        <div class="page">

            <div class="ingress">

                <div id="testScore">

                    <p id="resultComment">On your last test, you got <span id="correctWords"></span> of <span id="totalWords"></span> words right.</p>
                    <p id="grade">Grade: <b id="testGrade"></b></p>

                </div>

            </div>

            <div id="testResult">

                <p id="sampleElement" class="hidden">
                    <span class="originalWord"></span> =
                    <span class="answer"></span>
                    <span class="correctComment hidden"> (correct answer was <b class="correctWord"></b>)</span>
                </p>

            </div>
            
        </div>
        
    </div>

    <script src="/scripts/all.js"></script>
    <script src="/scripts/last-test.js"></script>

</body>

</html>
