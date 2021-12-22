var searchBox = document.getElementById("searchBox");

function doSearch(){
    var inputBox = document.getElementById("searchBox");
    var searchString = inputBox.value;

    if(searchString == ""){
        return;
    } else {
        var searchURL = "https://www.google.de/search?q=" + searchString;
        window.open(searchURL, "_self");
    }
}


searchBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        doSearch()
    }
});