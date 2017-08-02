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
        
            <h1>Practice</h1>
            <p>This is the practice section. When you practice, each word will get repeated until you get it right.</p>
        
        </div>
        
        <h2>Round <span id="round">0</span></h2>
        
        <div class="content wordcounter">
        
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
            
        </div>
        
        <br>
        
        <div class="center">
            
            <div id="practice">
                <p class="word">Translate <b id="wordToTranslate"></b> to <span id="lang">your language</span></p>
                <input type="text" name="practice" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form" id="practiceForm" onKeyDown="if(event.keyCode==13) enterWord();">
                <button onclick="enterWord();">Enter</button>
            </div>
        
            <p id="practiceCompleted" class="word hidden">Practice completed!</p>
            <p id="noWords" class="hidden">The word list is empty. <a class="link" href="/manage">Go add some words!</a></p>
            
        </div>
        
        <div id="correctComment">
            <p class="correct">Correct!</p>
        </div>
        
        <div id="wrongComment">
            <p class="false">Wrong!</p>
            <p>The correct word was <b id="correctWordWas"></b></p>
        </div>
    
        <script src="/scripts/practice.js"></script>
        
    </body>
    
</html>