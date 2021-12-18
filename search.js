function doSearch(){
    var inputBox = document.getElementById("searchBox");
    var searchString = inputBox.value;
    
    var searchURL = "https://www.google.de/search?q=" + searchString;

    window.open(searchURL, "_self");
}