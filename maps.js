function initMap() {
  const gymLocation = { lat: 40.74665798070661, lng: -73.90936631052442 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: gymLocation,
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: gymLocation,
    map: map,
    title: "CoreFitness Gym"
  });
}
