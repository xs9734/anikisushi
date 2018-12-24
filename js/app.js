$(document).foundation()

var x = document.getElementById('mobile-nav').offsetHeight;
console.log(x);
document.getElementById("topbar-center-logo").style.top = x +"px";

window.onresize = function(){
    var h = document.getElementById('mobile-nav').offsetHeight;
    console.log(h);
    document.getElementById("topbar-center-logo").style.top = h +"px";
}