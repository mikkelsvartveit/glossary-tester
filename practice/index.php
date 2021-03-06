<!DOCTYPE html>

<html>

<head>

    <title>Practice - Glossary Tester</title>

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

            <h1>Practice</h1>
            <p>This is the practice section. When you practice, each word will get repeated until you get it right.</p>

        </div>
            
        <div class="page">

            <h2>Round <span id="round">0</span></h2>
            
            <div class="stat">
                <span><b>Words left: </b></span>
                <span id="wordsLeft" class="float-right">0</span>
            </div>

            <div class="stat">
                <span><b>Words correct: </b></span>
                <span id="correctWords" class="float-right">0</span>
            </div>

            <div class="stat">
                <span><b>Words wrong: </b></span>
                <span id="wrongWords" class="float-right">0</span>
            </div>
            
            <button type="button" id="startOverButton" style="margin-top: 30px;">Start over</button>
            
        </div>
        
        <div id="progressBar">
            <div id="practiceProgress">
                <span></span>
            </div>
        </div>
        
        <div class="page">
            
            <div class="comments">
                <p id="correctComment" class="hidden">
                    <i class="material-icons correct">&#xE876;</i>
                    <b class="correct">Correct!</b>
                </p>

                <p id="wrongComment" class="hidden">
                    <i class="material-icons false">&#xE14C;</i>
                    <b class="false">Wrong!</b>
                    <span id="wordToTranslateWas"></span> = <b id="correctWordWas"></b></span>
                </p>

                <p id="correctRepeatComment" class="hidden">
                    <span class="correct">Great!</span>
                </p>
            </div>
    
            <div id="practice">
                <p class="word">Translate <b id="wordToTranslate"></b> to <span id="lang">your learning language</span></p>
                <button type="button" id="enterWordButton" class="float-right">Answer</button>
                <span class="fill-width">
                    <input type="text" name="practice" id="practiceForm" placeholder="Type your answer" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form">
                </span>
            </div>

            <div id="practiceRepeatWord">
                <p class="word">Type <b id="wordToRepeat"></b></p>
                <button type="button" id="repeatWordButton" class="float-right">Confirm</button>
                <span class="fill-width">
                    <input type="text" name="practiceRepeatForm" placeholder="Repeat" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form" id="practiceRepeatForm">
                </span>
            </div>

            <p id="practiceCompleted" class="word hidden">Practice completed!</p>
            <p id="noWords" class="hidden">The word list is empty. <a class="link" href="/manage">Go add some words!</a></p>

        </div>
        
        <div class="overlay hidden" id="confirmRestartPracticeOverlay">
            <h3>Restart practice</h3>
            <p>Are you sure you want to restart your practice session?</p>
            <button type="button" id="confirmRestartPracticeOverlayYesButton" class="float-left">Restart</button>
            <button type="button" id="confirmRestartPracticeOverlayNoButton" class="float-right">Cancel</button>
        </div>
        
        <div class="overlay hidden" id="wordListModifiedOverlay">
            <h3>Word list modified</h3>
            <p>Your word list has been modified since the last practice. Do you want to restart the practice session to include your new words?</p>
            <button type="button" id="wordListModifiedOverlayYesButton" class="float-left">Yes</button>
            <button type="button" id="wordListModifiedOverlayNoButton" class="float-right">No</button>
        </div>
    
    </div>
    
    <script src="/scripts/all.js"></script>
    <script src="/scripts/practice.js"></script>

</body>

</html>
