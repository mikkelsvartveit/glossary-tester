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
                <input type="text" name="language1" placeholder="Your language" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="default-input form" id="language1"> =
                <input type="text" name="language2" placeholder="Learning language" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="default-input form" id="language2">
                <br>
                <button type="button" id="addWordButton" style="margin: 20px;">Add word</button>
            </p>

        </div>
        
        <div class="wordListButtons">
            <button type="button" id="sortButton" class="iconButton" data-dropdown="sort-words-dropdown"><i class="material-icons md-dark md-big">&#xE164;</i>Sort</button>
            <div id="sort-words-dropdown" class="dropdown-content hidden">
                <a href="#" data-sort-order="alpha1"><i class="material-icons md-dark">&#xE053;</i>Alphabetically (<span id="lang1">1</span>)</a>
                <a href="#" data-sort-order="alpha2"><i class="material-icons md-dark">&#xE053;</i>Alphabetically (<span id="lang2">2</span>)</a>
                <a href="#" data-sort-order="oldest"><i class="material-icons md-dark">&#xE192;</i>Oldest first</a>
                <a href="#" data-sort-order="newest"><i class="material-icons md-dark">&#xE192;</i>Newest first</a>
            </div>
            <button type="button" id="clearButton" class="iconButton float-right"><i class="material-icons md-dark md-big">&#xE16C;</i>Clear</button>
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
            <button type="button" id="noInputOverlayOkButton" class="float-right">OK</button>
        </div>
        
        <div class="overlay hidden" id="illegalCharacterOverlay">
            <h3>Enter word</h3>
            <p>Words can not contain '=' or ';' characters.</p>
            <button type="button" id="illegalCharacterOverlayOkButton" class="float-right">OK</button>
        </div>
        
        <div class="overlay hidden" id="clearOverlay">
            <h3>Clear word list?</h3>
            <p>Are you sure you want to delete all your words?</p>
            <button type="button" id="clearOverlayNoButton" class="float-left">No</button>
            <button type="button" id="clearOverlayYesButton" class="float-right">Yes</button>
        </div>
    
    </div>

    <script src="/scripts/all.js"></script>
    <script src="/scripts/manage.js"></script>

</body>

</html>
