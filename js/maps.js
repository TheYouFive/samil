let mapOptions = {
  center: new naver.maps.LatLng(37.85286679999975, 127.19849449999991),
  zoom: 10,
};

let marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.85286679999975, 127.19849449999991),
  map: map,
});

let map = new naver.maps.Map("map", mapOptions);
