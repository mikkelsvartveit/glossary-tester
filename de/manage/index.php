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

            <h1>Verwalten Glossar</h1>
            <p>Fügen du deine Wörter, Wörter löschen, du bereits kennen, oder löschst du das Wort Liste und starten über.</p>

        </div>

        <div class="addWords center">

            <p id="form">
                <input type="text" name="language1" placeholder="Your language" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form" id="language1" onKeyDown="if(event.keyCode==13){document.getElementById('language2').focus();}">
                 = 
                <input type="text" name="language2" placeholder="Learning language" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form" id="language2" onKeyDown="if(event.keyCode==13) addWord();">
                <br>
                <button onclick="addWord();" style="margin: 20px;">Fügen Wort</button>
            </p>

        </div>

        <h2 class="center">Deine Worte</h2>

        <div class="wordTable center">

            <table class="center" id="table">
                <th>
                    <select id="langSelect1" onchange="changeLanguage(1);">
                        <option value="none" selected disabled>--Wählen--</option>
                        <option value="Other" id="other1">--Andere--</option>
                    </select>
                </th>
                
                <th>
                    <select id="langSelect2" onchange="changeLanguage(2);">
                        <option value="none" selected disabled>--Wählen--</option>
                        <option value="Other" id="other2">--Andere--</option>
                    </select>
                </th>
            </table>

            <button class="center" id="deleteAllWords" onclick="deleteAllWords();">Klare Wort-Liste</button>
            
            <p>Hinwies: Klicken du auf den drop-down-Listen ändern, um deine Sprache!</p>

        </div>

        <script src="manage.js"></script>
        
    </body>

</html>
