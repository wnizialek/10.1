var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true
});

var button = document.getElementById('restart');
var scroll = document.getElementById('scroll');

button.addEventListener('click', function(){
    flkty.select(0);
});

flkty.on('scroll', function(progress){
    scroll.style.width = Math.floor(progress * 100) + "%"
});