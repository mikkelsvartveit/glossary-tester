<!DOCTYPE html>

<html>

<head>

    <title>Test result - Glossary Tester</title>

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
        
        <h1>Your test result</h1>
        
        <div class="page">

            <div class="ingress">

                <p id="resultComment">
                    <!-- The possible options for the comment -->
                    <span id="100percent" class="hidden">Wow, great job! </span>
                    <span id="75plus" class="hidden">Well done! </span>
                    <span id="60plus" class="hidden">Not bad. </span>
                    <span id="under60" class="hidden">Ouch! </span> You got <span id="correctWords"></span> of <span id="totalWords"></span> words right.

                    <p id="grade">Grade: <b id="testGrade"></b></p>
                </p>

            </div>
        
            <div id="testResult">

                <p id="sampleElement" class="hidden">
                    <span class="originalWord"></span> =
                    <span class="answer"></span>
                    <span class="correctComment hidden"> (correct answer was <b class="correctWord"></b>)
                    </span>
                </p>

            </div>
            
            <button class="center" onclick="location.href='/tests/take-test'">Try again</button>

        </div>
    
    </div>

    <script src="/scripts/all.js"></script>
    <script src="/scripts/result.js"></script>

</body>

</html>
