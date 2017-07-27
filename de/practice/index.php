<!DOCTYPE html>

<html>

    <head>
    
        <title>Glossary tester</title>
        
        <?php 
           $path = $_SERVER['DOCUMENT_ROOT'];
           $path .= "/de/php/head.php";
           include_once($path);
        ?>
        
    </head>
    
    <body>
        
        <?php 
           $path = $_SERVER['DOCUMENT_ROOT'];
           $path .= "/de/php/menu.php";
           include_once($path);
        ?>
        
        <div class="ingress">
        
            <h1>Praxis</h1>
            <p>Das ist die Praxis Abschnitt. Wenn du übst, jedes Wort wird erhalten, wiederholt, bis du es richtig machen.</p>
        
        </div>
        
        <h2>Runde <span id="round">0</span></h2>
        
        <div class="content wordcounter">
        
            <div>
                <span><b>Wörter übrig: </b></span>
                <span id="wordsLeft">0</span>
            </div>
            
            <div>
                <span><b>Wörter korrigieren: </b></span>
                <span id="correctWords">0</span>
            </div>
            
            <div>
                <span><b>Wörter falsch: </b></span>
                <span id="wrongWords">0</span>
            </div>
            
        </div>
        
        <br>
        
        <div class="center" id="practice">
        
                <p class="word">Übersetzen <b id="wordToTranslate"></b> auf <span id="lang">your learning language</span></p>
                <input type="text" name="practice" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form" id="practiceForm" onKeyDown="if(event.keyCode==13) enterWord();">
                <button onclick="enterWord();">Eingeben</button>
            
        </div>
        
        <div id="correctComment">
            <p class="correct">Richtig!</p>
        </div>
        
        <div id="wrongComment">
            <p class="false">Falsch!</p>
            <p>Das richtige Wort war <b id="correctWordWas"></b></p>
        </div>
    
        <script src="practice.js"></script>
        
    </body>
    
</html>