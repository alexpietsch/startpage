<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="search.js"></script>
    <script src="sidenav.js"></script>
    <title>Startseite</title>
</head>
<body>

    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <p>Nothing here for now :)</p>

    </div>


    <div id="main">
        <div class="centerItems timeContainer">
            <span class="timeText" id="hour"></span>
            <span class="timeText">:</span>
            <span class="timeText" id="minute"></span>
        </div>
        <div class="centerItems dateContainer">
            <span class="dateText" id="dateText"></span>
        </div>
        <div class="centerItems searchContainer">
            <input type="text" class="search-input" id="searchBox" placeholder="Search google">
            <button class="search-btn" type="button" onclick="doSearch()">
                <img class="search-icon" src="icons/search.svg" alt="search">
            </button>
        </div>
        <script src="clock.js"></script>

        <footer>
        <div class="creds">
            <p style="color:#fff">
                <?php
                    $apikey = file_get_contents("apicreds.txt");
                    $content = file_get_contents("https://api.nasa.gov/planetary/apod?api_key=" . $apikey);
                    $result  = json_decode($content);
                    print_r($result->title . " - " . $result->copyright);
                ?>
            </p>
        </div>

        <div class="ghlink">
            <a href="https://github.com/autodidactor/startpage" target="_blank">Watch on GitHub</a>
        </div>
        </footer>
    </div>
    <span class="sicenavOpenbtn" onclick="openNav()">&#9776;</span>
</body>
</html>