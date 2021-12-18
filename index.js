function clock() {
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minute");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    
    if (h<10) {
        h="0"+h;
    } 
    if (m<10) {
        m="0"+m;
    } 

    hours.innerHTML = h;
    minutes.innerHTML = m;
}

var interval = setInterval(clock, 100);