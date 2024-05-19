// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: -33, lng: 151 },
    });
    const image =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const beachMarker = new google.maps.Marker({
      position: { lat: -33.45071777321896, lng: -70.58741124356567 },
      map,
      icon: image,
    });
  }
  
  window.initMap = initMap;