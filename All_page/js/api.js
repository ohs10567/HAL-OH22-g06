var map;
var marker;
var circle;
var id;
var infoWindow;

function initMap() {
  var myLatlng = new google.maps.LatLng(35.683755, 139.745625)

  var mapOptions = {
    zoom: 14,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ],
    center: myLatlng,
    restriction: {
      latLngBounds: {
        north: 34.7389121677093,
        south: 34.62929273621809,
        west: 135.3889693428745,
        east: 135.55963410913418
      },
      strictBounds: false
    }
  }
  map = new google.maps.Map(document.getElementById("gmap"), mapOptions);


  // ----------------------------------------------------------

  // 検索実行ボタンが押下されたとき
  // document.getElementById('search').addEventListener('click', function () {

  //   var place = document.getElementById('keyword').value;
  //   var geocoder = new google.maps.Geocoder();      // geocoderのコンストラクタ

  //   geocoder.geocode({
  //     address: place
  //   }, function (results, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {

  //       var bounds = new google.maps.LatLngBounds();

  //       for (var i in results) {
  //         if (results[0].geometry) {
  //           // 緯度経度を取得
  //           var latlng = results[0].geometry.location;
  //           // 住所を取得
  //           var address = results[0].formatted_address;
  //           // 検索結果地が含まれるように範囲を拡大
  //           bounds.extend(latlng);
  //           // マップの中心を設定
  //           map.setCenter(latlng);
  //           map.setZoom(14);
  //           // マーカーのセット
  //           setMarker(latlng);
  //           // マーカーへの吹き出しの追加
  //           setInfoW(place, latlng, address);
  //           // マーカーにクリックイベントを追加
  //           markerEvent();
  //         }
  //       }
  //     } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
  //       alert("見つかりません");
  //     } else {
  //       console.log(status);
  //       alert("エラー発生");
  //     }
  //   });

  // });

  // // 結果クリアーボタン押下時
  // document.getElementById('clear').addEventListener('click', function () {
  //   deleteMakers();
  // });

  //------------------------------------------------

  //   条件分岐用変数
  $cnt = 0;

  // 黒色のマスクポリゴン

  // 青色のポリゴンー－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

  //多角形の頂点の座標を指定して変数に代入
  var bulueCP = [
    { lat: 34.70713381019553, lng: 135.48786172703177 },  //左上
    { lat: 34.708650817009925, lng: 135.49567231917288 },   //右上
    { lat: 34.69953146924879, lng: 135.49839762101087 },  //右下
    { lat: 34.699407227571896, lng: 135.48708925088596 }  //左下
  ];

  //各種オプションを指定してコンストラクタでポリゴン（多角形）のインスタンスを生成
  var bluePorigon = new google.maps.Polygon({
    paths: bulueCP,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#0000FF',
    fillOpacity: 0.5
    // z-index: 999
  });

  //  緑色のポリゴン ー－－－－－－－－－－－－－－－－－－－－－－－
  var greenCP = [
    { lat: 34.708650817009925, lng: 135.49567231917288 },   //左上
    { lat: 34.70991490811749, lng: 135.5052096042862 },   //右上
    { lat: 34.70250427289247, lng: 135.50630832057436 },  //右下
    { lat: 34.69953146924879, lng: 135.49839762101087 } //左下
  ];

  //各種オプションを指定してコンストラクタでポリゴン（多角形）のインスタンスを生成
  var greenPorigon = new google.maps.Polygon({
    paths: greenCP,
    strokeColor: '#000000',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#000000',
    fillOpacity: 0.8
    // z-index: 999

  });

  // 黄色のポリゴンー－－－－－－－－－－－－－－－－－－－－－－－－－
  var yellowCP = [
    { lat: 34.699407227571896, lng: 135.48708925088596 },   //左上
    { lat: 34.69953146924879, lng: 135.49839762101087 },   //右上
    { lat: 34.69523901956526, lng: 135.49855840210014 },  //右下
    { lat: 34.69334945718692, lng: 135.48839197737163 } //左下
  ];

  //各種オプションを指定してコンストラクタでポリゴン（多角形）のインスタンスを生成
  var yellowPorigon = new google.maps.Polygon({
    paths: yellowCP,
    strokeColor: '#ffff00',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#ffff00',
    fillOpacity: 0.5

  });

  // 赤色のポリゴンー－－－－－－－－－－－－－－－－－－－－－－－－－
  var redCP = [
    { lat: 34.69953146924879, lng: 135.49839762101087 },   //左上
    { lat: 34.70250427289247, lng: 135.50630832057436 },   //右上
    { lat: 34.69392459102464, lng: 135.5070814916508 },  //右下
    { lat: 34.69523901956526, lng: 135.49855840210014 } //左下
  ];

  //各種オプションを指定してコンストラクタでポリゴン（多角形）のインスタンスを生成
  var redPorigon = new google.maps.Polygon({
    paths: redCP,
    strokeColor: '#ff0000',
    strokeOpacity: 0.8,
    strokeWeight: 0,
    fillColor: '#ff0000',
    fillOpacity: 0.5

  });

  //   if文-----------------------------------------------------------------------
  if ($cnt >= 1) {
    var bluePorigon = new google.maps.Polygon({
      paths: bulueCP,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 0,
      fillColor: '#0000FF',
      fillOpacity: 0
      // z-index: 999
    });
  }

  if ($cnt >= 2) {
    var greenPorigon = new google.maps.Polygon({
      paths: greenCP,
      strokeColor: '#008000',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#008000',
      fillOpacity: 0
    });
  }

  if ($cnt >= 3) {
    var yellowPorigon = new google.maps.Polygon({
      paths: yellowCP,
      strokeColor: '#ffff00',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#ffff00',
      fillOpacity: 0
    });
  }
  //多角形を地図に描画
  bluePorigon.setMap(map);
  greenPorigon.setMap(map);
  yellowPorigon.setMap(map);
  redPorigon.setMap(map);

}
// initMapここまでー－－－－－－－－－－－－－－－－－－

// マーカーのセットを実施する
function setMarker(setplace) {
  // 既にあるマーカーを削除
  deleteMakers();

  var iconUrl = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  marker = new google.maps.Marker({
    position: setplace,
    map: map,
    icon: iconUrl
  });
}

//マーカーを削除する
function deleteMakers() {
  if (marker != null) {
    marker.setMap(null);
  }
  marker = null;
}

// マーカーへの吹き出しの追加
function setInfoW(place, latlng, address) {
  infoWindow = new google.maps.InfoWindow({
    content: "<a href='http://www.google.com/search?q=" + place + "' gmap='_blank'>" + place + "</a><br><br>" + latlng + "<br><br>" + address + "<br><br><a href='http://www.google.com/search?q=" + place + "&tbm=isch' gmap='_blank'>画像検索 by google</a>"
    // content: "Hello"
  });
}

// クリックイベント
function markerEvent() {
  marker.addListener('click', function () {
    infoWindow.open(map, marker);
  });
}

function success(pos) {
  var crd = pos.coords;
  var timeStamp = pos.timestamp;

  var currentPos = new google.maps.LatLng(crd.latitude, crd.longitude);

  if (marker != undefined) marker.setMap(null);
  if (circle != undefined) circle.setMap(null);

  /* 現在位置にマーカーを設定 */
  marker = new google.maps.Marker({ position: currentPos, map: map });

  map.setCenter(currentPos);
  map.setZoom(14);
  setInfo(timeStamp, crd);
}
function error(err) {
  document.getElementById('tdErrCd').innerHTML = err.code;
  document.getElementById('tdErrMg').innerHTML = err.message;
}
function setInfo(timeStamp, crd) {
  var tableRef = document.getElementById('tblGps');
  var newRow = tableRef.insertRow(1);
  var newCellTime = newRow.insertCell(0);
  var newCellLat = newRow.insertCell(1);
  var newCellLng = newRow.insertCell(2);
  var newCellAcr = newRow.insertCell(3);
  newCellTime.innerHTML = timeStamp;
  newCellLat.innerHTML = crd.latitude;
  newCellLng.innerHTML = crd.longitude;
  newCellAcr.innerHTML = crd.accuracy + 'm';
}
function startWatchPosition() {
  if (id == undefined) {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    id = navigator.geolocation.watchPosition(success, error, options);
  }
}
function clearWatchPosition() {
  if (id != undefined) {
    navigator.geolocation.clearWatch(id);
    id = null;
  }
  if (marker != undefined) marker.setMap(null);
  if (circle != undefined) circle.setMap(null);
}


// 通知バッジ記載
const icon = document.getElementById('icon');

document.getElementById('plus').addEventListener('click', () => icon.dataset.num++ );
document.getElementById('minus').addEventListener('click', () => icon.dataset.num > 0 && icon.dataset.num-- );

