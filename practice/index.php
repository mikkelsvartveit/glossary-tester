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

            <h1>Practice</h1>
            <p>This is the practice section. When you practice, each word will get repeated until you get it right. </p>
            <button type="button" onclick="startOver();">Start over</button>

        </div>

        <h2>Round <span id="round">0</span></h2>

        <div>
            <span><b>Words left: </b></span>
            <span id="wordsLeft">0</span>
        </div>

        <div>
            <span><b>Words correct: </b></span>
            <span id="correctWords">0</span>
        </div>

        <div>
            <span><b>Words wrong: </b></span>
            <span id="wrongWords">0</span>
        </div>

        <div class="comments">
            <p id="correctComment" class="hidden">
                <i class="material-icons" style="color: green;">&#xE876;</i>
                <span class="correct">Correct!</span>
            </p>

            <p id="wrongComment" class="hidden">
                <i class="material-icons" style="color: red;">&#xE14C;</i>
                <span class="false">Wrong!</span>
                <span id="wordToTranslateWas"></span> = <b id="correctWordWas"></b></span>
            </p>

            <p id="correctRepeatComment" class="hidden">
                <span class="correct">Great!</span>
            </p>
        </div>

        <div id="practice">
            <p class="word">Translate <b id="wordToTranslate"></b> to <span id="lang">your language</span></p>
            <button type="button" class="float-right" onclick="enterWord();">Answer</button>
            <span class="fill-width">
                <input type="text" name="practice" placeholder="Type your answer" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="default-input form" id="practiceForm" onKeyDown="if(event.keyCode==13) enterWord();">
            </span>
        </div>

        <div id="practiceRepeatWord">
            <p class="word">Type <b id="wordToRepeat"></b></p>
            <button type="button" class="float-right" onclick="typeRepeatWord();">Answer</button>
            <span class="fill-width">
                <input type="text" name="practiceRepeatForm" placeholder="Repeat" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form" id="practiceRepeatForm" oninput="typeRepeatWord();">
            </span>
        </div>

        <p id="practiceCompleted" class="word hidden">Practice completed!</p>
        <p id="noWords" class="hidden">The word list is empty. <a class="link" href="/manage">Go add some words!</a></p>

    </div>

    <script src="/scripts/practice.js"></script>

</body>

</html>
