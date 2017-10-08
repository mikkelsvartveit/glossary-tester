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

            <h1>Manage glossary</h1>
            <p>Add your words, delete words you already know or clear the word list and start over.</p>

        </div>

        <div class="addWords center">

            <p id="form">
                <input type="text" name="language1" placeholder="Your language" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form" id="language1" onKeyDown="if(event.keyCode==13){document.getElementById('language2').focus();}"> =
                <input type="text" name="language2" placeholder="Learning language" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="form" id="language2" onKeyDown="if(event.keyCode==13) addWord();">
                <br>
                <button onclick="addWord();" style="margin: 20px;">Add word</button>
            </p>

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

        <div class="center">            
            <button id="deleteAllWords" onclick="deleteAllWords();">Clear word list</button>
        </div>

        <p><b>Hint:</b> Click on the dropdown lists to change your language!</p>
    
    </div>

    <script src="/scripts/manage.js"></script>

</body>

</html>
