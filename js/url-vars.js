function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
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

document.getElementById("ip").innerHTML = ip;
document.getElementById("browser").innerHTML = browser;
document.getElementById("device_make").innerHTML = device_make;
document.getElementById("device_model").innerHTML = device_model;
document.getElementById("org").innerHTML = org;
document.getElementById("city").innerHTML = city;
document.onload = getUrlVars();
