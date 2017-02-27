// Map for business page

var locations = [
    [
        "Fol Epi Organic Bakery",
        48.432184, -123.378433
    ]
    
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.432002, -123.378433),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

  function newList(order) {
  youritem = youritem + order;
  document.getElementById("userOrder").innerHTML = youritem;
  
}
newList("")

var itemTotal = 0;
var tax = 0;
var fprice = 0;

function updateTotal(cost) {
  itemTotal = itemTotal + cost;
  tax = tax + (itemTotal*0.12);
  fprice = tax + itemTotal;
  document.getElementById("itemTotal").innerHTML = pizzaTotal;
  document.getElementById("tax").innerHTML = tax;
  document.getElementById("test").innerHTML = fprice;