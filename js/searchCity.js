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

function setLocation(){
    $("#searchCityContainer").show();
    $("#setLoc").hide();
    $('#loadgif').hide(); 
    $.ajaxSetup({ cache: false });
    $('#searchBtn').click(function(){
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        if(searchField.length < 2){
            $('#result').append('<li class="list-group-item link-class">Bitte mindestens 2 Zeichen eingeben</li>');
        } else {
            $('#loadgif').show();
            var expression = new RegExp(searchField, "i");
            $.getJSON('city.list.min.json', function(data) {
                $.each(data, function(key, value){
                    if (value.name.search(expression) != -1){
                        $('#result').append('<li class="list-group-item link-class">'+value.name+' | '+value.country+'</li><br/>');
                    }
                });
            $('#loadgif').hide();  
            });
        }
        
    });
}


$(document).ready(function(){
    let loc = getCookie("loc");
    if (loc != ""){
        $("#searchCityContainer").hide();
        $("#setLoc").show();
        $("#locText").text("aktuelle gewählter Standort: "+loc);
    } else {
        $("#weatherContainer").hide();
        setLocation()
    }

    $('#result').on('click', 'li', function() {
        document.cookie = "loc=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        var click_text = $(this).text().split('|');
        const d = new Date();
        d.setTime(d.getTime() + (3650*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "loc=" + click_text[0] + ";" + expires + "; SameSite=Strict; Secure;";
        window.location = window.location;
        $("#searchCityContainer").hide();
        $("#setLoc").show();
        $("#weatherContainer").show();
        $("#locText").text("aktuell gewählter Standort: "+loc);
    });
   });

   
   