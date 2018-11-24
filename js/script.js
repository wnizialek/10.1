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

window.initMap = function() {
   
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: slidesData[0].coords});

    for(var i = 0; i < slidesData.length; i++){ 
        new google.maps.Marker({position: slidesData[i].coords, map: map}).addListener('click', function(){
			flkty.select(i);
        });	
    }
    flkty.on( 'change', function( index ) {
        map.panTo(slidesData[index].coords);
    
    });
} 

