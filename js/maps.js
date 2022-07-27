var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.85268, 127.20281),
  zoom: 15,
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.85268, 127.20281),
  map: map,
});
