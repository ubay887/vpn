function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value.replace(/%20/g, " ");;
    });

    console.log(vars);
    return vars;
;
}

var ip = getUrlVars()["ip"];
var browser = getUrlVars()["browser"];
var device_make = getUrlVars()["device_make"];
var device_model = getUrlVars()["device_model"];
var org = getUrlVars()["org"];
var city = getUrlVars()["city"];

// for links
var click_id = getUrlVars()["action"];
var zone = getUrlVars()["zone"];


document.getElementById("ip").innerHTML = ip;
document.getElementById("browser").innerHTML = browser;
document.getElementById("device_make").innerHTML = device_make;
document.getElementById("device_model").innerHTML = device_model;
document.getElementById("org").innerHTML = org;
document.getElementById("city").innerHTML = city;
document.onload = getUrlVars();

//--- build and replace links
var links = document.getElementsByTagName('a');

console.log(links);

for (var i = 0; i < links.length; i++) {
  var link = "https://track.ultravpn.com/5d02892a4faea/click/" + zone + "/" + click_id + "/yts";
  links[i].setAttribute('href', link)
}

//https://track.ultravpn.com/5d02892a4faea/click/[zone]/[clickid]/yts
