//By KHALKI Elmehdi.
//MMPG Softwares Test Round 1.
//Animation by Javascript.


//Get city from URl

window.$_GET = new URLSearchParams(location.search);   
const city = $_GET.get('city');
/*const city = sessionStorage.getItem("city");*/
image="";
document.getElementById("titre").innerHTML =city=="Fes"? 'Fès' : city; 
switch (city) 
{
    case 'Casablanca':image = "images/casablanca.jpg";document.getElementById("casa").href ="#";break;
    case 'Rabat':image = "images/rabat.jpg";document.getElementById("rabat").href ="#";break;
    case 'Fes':image = "images/fes.jpg";document.getElementById("fes").href ="#";break;
    default:image = "images/city.jpg";
                    document.getElementById("h4intro").innerHTML ="Activez le geolocalisation ou choisissez une ville depuis la barre de navigation";
                    document.getElementById("h4deta").innerHTML ="&#149; Il se peut que votre localisation ne corresponde pas aux villes proposées.<br><br> &#149; <a href='https://www.sitigeo.com/fr/article/activez-la-geolocalisation-sur-votre-navigateur-mettre-sitigeocom-en-favori'>Visitez ce site pour plus d'information concernant geolocalisation.</a>";
                    document.getElementById("titre").innerHTML ="Maroc";
                    document.getElementById("nbrvisite1").style.display ="none";
                    document.getElementById("nbrvisite2").style.display ="none";
                    document.getElementById("nbrvisite3").style.display ="none";
                    
}
document.getElementById("image").src = image; 

//Geolocalisation

function getLocation()
{
    // HTML5/W3C Geolocation
    if (navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition(UserLocation);
    }
    // Default to Washington, DC
    else
    {
      x.innerHTML="Geolocation n’est pas prise en charge par ce navigateur.";
    }   
}

    // Callback function for asynchronous call to HTML5 geolocation
function UserLocation(position) {
  NearestCity(position.coords.latitude, position.coords.longitude);
}

    // Convert Degress to Radians
function Deg2Rad(deg) {
  return deg * Math.PI / 180;
}

function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);
  var R = 6371; // km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = (lat2 - lat1);
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}

var lat = 20; // user's latitude
var lon = 40; // user's longitude

var cities = [
  ["Casablanca", 33.604245, -7.651457, 20],
  ["Fes", 34.014922, -5.017432, 10],
  ["Rabat", 33.9715904, -6.8498129, 24]
];
var minDif = 99999;
var closest=-1;
var test=false;
var url="https://mmpgproject.ew.r.appspot.com/index?";
var dif =0;
function NearestCity(latitude, longitude) {
 
  for (i = 0; i < cities.length; ++i) {
    dif= PythagorasEquirectangular(latitude, longitude, cities[i][1], cities[i][2]);
    //console.log("diff = "+dif +" / "+cities[index][3]);
    if (dif < minDif && dif<cities[i][3]) {
      closest = i;
      minDif = dif;
      test = true;
    }
    
  }
  
  test? url='https://mmpgproject.ew.r.appspot.com/index?city='+cities[closest][0] : ''; 
  window.open(url,'_self');
}