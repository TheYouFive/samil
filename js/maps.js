var map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(37.85286679999975, 127.19849449999991),
  zoom: 15,
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.85286679999975, 127.19849449999991),
  map: map,
});
