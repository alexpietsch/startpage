function clock() {
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minute");
    var date = document.getElementById("dateText");
    var weekdayArray = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");

    const today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var weekday = weekdayArray[today.getDay()];
    
    if (h<10) {
        h="0"+h;
    } 
    if (m<10) {
        m="0"+m;
    } 

    hours.innerHTML = h;
    minutes.innerHTML = m;
    date.innerHTML = weekday+" - "+day+"."+month+"."+year
}

var interval = setInterval(clock, 100);