
function initMap() {
    const loc = { lat: 28.632429, lng: 77.218788 };
    const map = new google.maps.Map(document.querySelector('.map')
    ,
     {
      zoom: 14,
      center:loc
    });
    const marker = new google.maps.Marker({position:loc, map :
         map});
  }

  window.addEventListener('scroll' , function(){
    if (window.scrollY > 150){
      document.querySelector('#navbar').style.opacity = 0.9;
    } else{
      document.querySelector('#navbar').style.opacity = 1;
    }
  });

  

  $('#navbar a, .btn').on('click',function(event){
    if (this.hash !==''){
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
           { scrollTop: $(hash).offset().top - 100
        },
        800
        );
  }
}); 
/*function initMap() {
    const loc = { lat: 28.632429, lng: 77.218788 };
    const map = new google.maps.Map(document.getElementByClass("map")
    ,
     {
      zoom: 14,
      center:loc
    });
    const marker = new google.maps.Marker({position:loc, map :
         map});
  }*/
  
  /*function initMap() {
    map = new google.maps.Map(document.getElementByClass("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }*/