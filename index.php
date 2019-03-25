<!DOCTYPE html>

<html>

<head>

    <title>Glossary Tester</title>

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

    <div class="ingress" style="margin-left: 20px; margin-right: 20px;">

        <h1>Glossary Tester</h1>
        <p>Are you tired of learning glossary? Glossary Tester makes learning glossary easy and fun!</p>

    </div>

    <div class="row">

        <div class="col">

            <a href="/manage" class="card">

                <h3>Manage glossary</h3>
                <p>This is where you manage your words. Before you start learning, add your words here!</p>

            </a>

        </div>

        <div class="col">

            <a href="/practice" class="card">

                <h3>Practice</h3>
                <p>If you don't know all your glossary by heart yet, practice here! You'll be there in no time!</p>

            </a>

        </div>

        <div class="col">

            <a href="/tests" class="card">

                <h3>Test yourself</h3>
                <p>Are you confident that you know your glossary? Test yourself here, and get a score!</p>

            </a>

        </div>

    </div>
    
    <script src="/scripts/all.js"></script>

</body>

</html>
