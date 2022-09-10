window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("navbar").style.top = "0";
} else {
document.getElementById("navbar").style.top = "-70px";
}
}


var offsetStart = 0;
var offsetEnd = 0;

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
}, false);