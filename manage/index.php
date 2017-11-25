<!DOCTYPE html>

<html>

<head>

    <title>Manage glossary - Glossary Tester</title>

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

            <h1>Manage glossary</h1>
            <p>Add your words, delete words you already know or clear the word list and start over.</p>

        </div>

        <div class="addWords center">

            <p id="form">
                <input type="text" name="language1" placeholder="Your language" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="default-input form" id="language1" onKeyDown="if(event.keyCode==13){document.getElementById('language2').focus();}"> =
                <input type="text" name="language2" placeholder="Learning language" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="default-input form" id="language2" onKeyDown="if(event.keyCode==13) addWord();">
                <br>
                <button type="button" onclick="addWord();" style="margin: 20px;">Add word</button>
            </p>

        </div>
        
        <div class="wordListButtons">
            <button type="button" class="iconButton float-right" onclick="showOverlay('clearOverlay', true);"><i class="material-icons md-dark md-big">&#xE16C;</i>Clear</button>
        </div>
        
        <table id="table">
            <tr>
                <th>
                    <select id="langSelect1" onchange="changeLanguage(1);">
                        <option value="none" selected disabled>--Select--</option>
                        <option value="Other" id="other1">--Other--</option>
                    </select>
                </th>
                
                <th>
                    <select id="langSelect2" onchange="changeLanguage(2);">
                        <option value="none" selected disabled>--Select--</option>
                        <option value="Other" id="other2">--Other--</option>
                    </select>
                </th>
            </tr>
        </table>

        <p><b>Hint:</b> Click on the dropdown lists to change your language!</p>
        
        <div id="dim" class="dim">
            <!-- This dims the viewport to prepare for a dialog box -->
        </div>
        
        <div class="overlay hidden" id="noInputOverlay">
            <h3>Enter word</h3>
            <p>Enter a word in both text fields!</p>
            <button type="button" class="float-right" autofocus onclick="showOverlay('noInputOverlay', false);">OK</button>
        </div>
        
        <div class="overlay hidden" id="illegalCharacterOverlay">
            <h3>Enter word</h3>
            <p>Words can not contain '&' or ':' characters.</p>
            <button type="button" class="float-right" autofocus onclick="showOverlay('illegalCharacterOverlay', false);">OK</button>
        </div>
        
        <div class="overlay hidden" id="clearOverlay">
            <h3>Clear word list?</h3>
            <p>Are you sure you want to delete all your words?</p>
            <button type="button" class="float-left" onclick="deleteAllWords(false);">No</button>
            <button type="button" class="float-right" onclick="deleteAllWords(true);">Yes</button>
        </div>
    
    </div>

    <script src="/scripts/manage.js"></script>

</body>

</html>
