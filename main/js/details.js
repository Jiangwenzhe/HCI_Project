$(document).ready(function() {
   var url = window.location.search;
   var value = url.split('?')[1];
   var ModelID = value.split('&')[0];
   var size = value.split('&')[1];
   console.log(size)
    
    $('#model-obj').attr('src',`source/${ModelID}/${ModelID}.obj`);
    $('#model-mtl').attr('src',`source/${ModelID}/${ModelID}.mtl`);
    var scaleObj = {
        x: size,
        y: size,
        z: size
    }
    document.querySelector('a-obj-model').setAttribute('scale',scaleObj)
    console.log(`${size} ${size} ${size}`)
    console.log(document.querySelector('a-obj-model').getAttribute('scale'))
})