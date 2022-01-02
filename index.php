<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/sidenav.js"></script>
    <script src="js/searchCity.js"></script>
    <title>Startseite</title>
</head>
<body>

    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="setLoc" id="setLoc">
            <p class="locText text-white" id="locText"></p>
            <button id="setNewLocBtn" onclick="setLocation()">Standort setzen</button>
        </div>
    </div> 


    <div id="main">
        <div class="centerContainerItems timeContainer text-white">
            <span class="timeText" id="hour"></span>
            <span class="timeText">:</span>
            <span class="timeText" id="minute"></span>
        </div>
        <div class="centerContainerItems dateContainer">
            <span class="dateText text-white" id="dateText"></span>
        </div>
        <div class="centerContainerItems searchContainer">
            <input type="text" class="search-input text-white" id="searchBox" placeholder="Search google">
            <button id="search-btn" class="search-btn" type="button" onclick="doSearch()">
                <img class="search-icon" src="assets/img/search.svg" alt="search">
            </button>
        </div>
        <script src="js/search.js"></script>

        <div class="weatherContainer centerContainerItems text-white" id="weatherContainer">
            <p>
                <?php
                    $apikeyWeather = file_get_contents("../../creds/apicredsWeather.txt");
                    $lat = htmlspecialchars($_COOKIE["_locLat"]);
                    $lon = htmlspecialchars($_COOKIE["_locLon"]);
                    
                    $content = file_get_contents("https://api.openweathermap.org/data/2.5/weather?lat=".$lat."&lon=".$lon."&units=metric&lang=de&appid=".$apikeyWeather);
                    $weatherData  = json_decode($content);
                    $temp = $weatherData->main->temp;
                    $weatherDesc = $weatherData->weather[0]->description;
                    $tempMin = $weatherData->main->temp_min;
                    $tempMax = $weatherData->main->temp_max;
                    $iconID = $weatherData->weather[0]->icon;
                    $cityName = $weatherData->name;
                    $iconUrl = "https://openweathermap.org/img/wn/".$iconID."@2x.png";
                    $image = base64_encode(file_get_contents($iconUrl));
                    print_r($cityName . ": " . round($temp) ."°C, ". $weatherDesc);
                ?>
            </p>
            <img style="padding-top:0.4em" width="auto" height="64px" src="data:image/x-icon;base64,<?= $image ?>">
        </div>

        <footer>
        <div class="creds text-white">
            <p>
                <?php
                    $apikeyImage = file_get_contents("../../creds/apicredsImage.txt");
                    $content = file_get_contents("https://api.nasa.gov/planetary/apod?api_key=" . $apikeyImage);
                    $result  = json_decode($content);
                    print_r($result->title . " - " . $result->copyright);
                ?>
            </p>
        </div>
        </footer>
    </div>
    <span class="sicenavOpenbtn" onclick="openNav()">&#9881;</span>
</body>
</html>