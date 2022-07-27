var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.8529, 127.20265),
  zoom: 15,
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.8529, 127.20265),
  map: map,
});
