function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

function handleError(error) {
    let errorStr;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorStr = 'User denied the request for Geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        errorStr = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        errorStr = 'The request to get user location timed out.';
        break;
      case error.UNKNOWN_ERROR:
        errorStr = 'An unknown error occurred.';
        break;
      default:
        errorStr = 'An unknown error occurred.';
    }
    console.error('Error occurred: ' + errorStr);
}

function setLocData(position){
    document.cookie = "loc=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    const d = new Date();
    d.setTime(d.getTime() + (3650*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    var cookieLatString = "_locLat=" + position.coords.latitude + ";" + expires + "; SameSite=Strict; secure;";
    var cookieLonString = "_locLon=" + position.coords.longitude + ";" + expires + "; SameSite=Strict; secure;";
    document.cookie = cookieLatString;
    document.cookie = cookieLonString;
    window.location = window.location;
}

function setLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocData, handleError, options);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

$(document).ready(function(){
    if (getCookie("_locLat") != "" && getCookie("_locLon") != ""){
        $("#weatherContainer").show();
    } else {
        $("#weatherContainer").hide();
    }
});