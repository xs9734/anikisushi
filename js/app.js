$(document).foundation()

var x = document.getElementById('mobile-nav').offsetHeight;
console.log(x);

document.getElementById("first-box").style.paddingTop = x +"px";

window.onresize = function(){
    var h = document.getElementById('mobile-nav').offsetHeight;
    console.log(h);
    document.getElementById("first-box").style.paddingTop = h +"px";
}

/*
var x = document.getElementById('mobile-nav').offsetHeight;
console.log(x);
document.getElementById("topbar-center-logo").style.top = x +"px";

window.onresize = function(){
    var h = document.getElementById('mobile-nav').offsetHeight;
    console.log(h);
    document.getElementById("topbar-center-logo").style.top = h +"px";
} 
*/