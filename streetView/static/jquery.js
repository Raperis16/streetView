var uzvarasId = 0;
var dataHolder = "";
var izvelne = [];
var uzvaretajaID = 0;
var points = 0;

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
  beforeSend: function (xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  }
});

var panorama;
function initialize() {
  var fenway = { lat: 42.345573, lng: -71.098326 };
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {

      position: fenway,
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
      showRoadLabels: false
    });

}

function set_loc(lats, long) {

  fenway = { lat: lats, lng: long };
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'), {
      position: fenway,
      showRoadLabels: false
    });

}


function hideStart() {
  document.getElementById("header").style.display = "none";
  get_game_data();

}


function get_game_data() {
  $.ajax({
    async: false,
    type: 'GET',
    url: 'api/game',
    dataType: 'json',
    success: function (data) {

      dataHolder = data
      var real = Math.floor(Math.random() * 4) + 1;
      uzvarasId = real;
      set_loc(parseFloat(data[real - 1].lat), parseFloat(data[real - 1].lng));
      document.getElementById("1").value = data[0].nos;
      document.getElementById("2").value = data[1].nos;
      document.getElementById("3").value = data[2].nos;
      document.getElementById("4").value = data[3].nos;
      
      uzvaretajaID = (data[real-1].id)
      var i;
      for (i = 0; i < 4;  i++) {
        if (data[i].id != uzvaretajaID){
          izvelne.push(data[i].id)
        }}

    }
  });

}


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.className == "mystyle") {
    x.className = "show";
  }
   else if (x.className == "show") {
    x.className = "mystyle";
  }
}

function myFunction1() {
  var x = document.getElementById("myDIV1");
  if (x.className == "mystyle") {
    x.className = "show1";
  }
   else if (x.className == "show1") {
    x.className = "mystyle";
  }
}


function ress() {
  get_game_data();
  myFunction();
}
function ress1() {
  get_game_data();
  myFunction1();
}

function check_answer(idOfClickedButton) {

  if (idOfClickedButton == uzvarasId) {

    sendOK(uzvarasId, 'Y');
    myFunction();
    points+=1;
    console.log(points)

  }
  else {;
    sendOK(uzvarasId, 'N');
    myFunction1();
  }

}
var token = '{{csrf_token}}';

function sendOK(uzvarasId, result) {

  Fake1 = izvelne[0];
  Fake2 = izvelne[1];
  Fake3 = izvelne[2];


  $.ajax({
    headers: { "X-CSRFToken": token },
    type: "POST",
    url: "/api/save/",
    dataType: "json",
    // The key needs to match your method's input parameter (case-sensitive).
    // data: JSON.stringify({ Markers: markers }),
    data: {
      "id_loc": uzvaretajaID,
      "result": result,
      "Fake1": Fake1,
      "Fake2": Fake2,
      "Fake3": Fake3,
    },
    success: function (data) {
      console.log(data);
    },
    error: function (textStatus, errorThrown) {
      // alert("Status: " + textStatus);
      // alert("Error: " + errorThrown);


    }
  });
};