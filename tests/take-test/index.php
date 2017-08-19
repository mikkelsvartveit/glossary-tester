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

    <div class="content">

        <div id="takeTest">
            <p class="hidden" id="sampleElement">
                Translate
                <span class="word1 bold"></span> to
                <span class="lang">your language</span>
                <br>
                <input type="text" class="input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
            </p>
        </div>

        <button id="submitTest" class="hidden" onclick="submitTest()">Submit test</button>

        <p id="noWords" class="hidden">The word list is empty. Go <a class="link" href="/manage">here</a> to add some words!</p>

    </div>

    <script src="/scripts/take-test.js"></script>

</body>

</html>
