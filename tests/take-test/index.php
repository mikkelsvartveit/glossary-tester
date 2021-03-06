<!DOCTYPE html>

<html>

<head>

    <title>Take test - Glossary Tester</title>

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
        
        <h1>Taking test</h1>
    
        <div class="page">

            <div id="takeTest">
                <p class="hidden" id="sampleElement">
                    Translate
                    <span class="word1 bold"></span> to
                    <span class="lang">your learning language</span>
                    <br>
                    <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="default-input input">
                </p>
            </div>

            <button type="button" id="submitTest" class="hidden" >Submit test</button>

            <p id="noWords" class="hidden">The word list is empty. Go <a class="link" href="/manage">here</a> to add some words!</p>

        </div>
        
    </div>

    <script src="/scripts/all.js"></script>
    <script src="/scripts/take-test.js"></script>

</body>

</html>
