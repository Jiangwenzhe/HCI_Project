$(document).ready(function() {
   var url = window.location.search;
   if(url.indexOf("?")!= -1) {
    var searchValue = url.substr(url.indexOf("=")+1);
    console.log(searchValue);

    $('#model-obj').attr('src',`source/${searchValue}/${searchValue}.obj`);
    $('#model-mtl').attr('src',`source/${searchValue}/${searchValue}.mtl`);
}
})