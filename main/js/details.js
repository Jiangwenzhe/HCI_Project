$(document).ready(function() {
   var url = window.location.search;
   var value = url.split('?')[1];
   var ModelID = value.split('&')[0];
   var size = value.split('&')[1];
   console.log(ModelID)
    console.log(document.querySelector('a-marker').setAttribute('Url', `source/${ModelID}/pattern-${ModelID}.patt`))
    $('#model-obj').attr('src',`source/${ModelID}/${ModelID}.obj`);
    $('#model-mtl').attr('src',`source/${ModelID}/${ModelID}.mtl`);
    console.log(document.querySelector('a-marker').getAttribute('Url'))
    var scaleObj = {
        x: size,
        y: size,
        z: size
    }
    document.querySelector('a-obj-model').setAttribute('scale',scaleObj)
    console.log(`${size} ${size} ${size}`)



AFRAME.registerComponent('markerhandler', {

    init: function() {
        const up = document.querySelector("#up");
        const down = document.querySelector('#down')
        const big = document.querySelector('#big');
        const small = document.querySelector('#small')
        const left = document.querySelector('#left')
        const right = document.querySelector('#right')
        const aEntity = document.querySelector("#animated-model");


        up.addEventListener('mousedown', function(ev, target){
                const rotation = aEntity.getAttribute('rotation');
                    rotation.x +=10
                    console.log(rotation )
                    aEntity.setAttribute('rotation', rotation);

        });

        down.addEventListener('mousedown', function(ev, target){
                const rotation = aEntity.getAttribute('rotation');
                rotation.x -=10
                console.log(rotation )
                aEntity.setAttribute('rotation', rotation);

        });

        left.addEventListener('mousedown', function(ev, target){
                const rotation = aEntity.getAttribute('rotation');
                rotation.y -=10
                console.log(rotation )
                aEntity.setAttribute('rotation', rotation);

        });

        right.addEventListener('mousedown', function(ev, target){
            const rotation = aEntity.getAttribute('rotation');
            rotation.y +=10
            console.log(rotation )
            aEntity.setAttribute('rotation', rotation);

        });

        big.addEventListener('click', function(ev, target){
            console.log(1)
                const scale= aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 0.001);
                console.log(scale )
                aEntity.setAttribute('scale', scale);

        });

        small.addEventListener('click', function(ev, target){
            console.log(1)
                const scale= aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] - 0.001);
                console.log(scale )
                aEntity.setAttribute('scale', scale);
        });

}});

})