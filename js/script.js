var slidesList = document.getElementById('slides-list').innerHTML;
var results = document.getElementById('results');

for(var i = 0; i < slidesData.length; i++){
    results.insertAdjacentHTML('beforeend', Mustache.render(slidesList, slidesData[i]));
}

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true
});


