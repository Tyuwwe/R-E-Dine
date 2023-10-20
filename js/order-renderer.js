const picbox = document.getElementById("map-box");
const pic = document.getElementById("map-img");
picbox.onmousemove = function(e) {
    var x = e.clientX / document.body.clientWidth;
    var y = e.clientY / document.body.clientHeight;
    //console.log(x);
    //console.log(y);
    pic.style.transform = "translate(" + ((x - 0.5) / 8) * document.body.clientWidth + "px, " + ((y - 0.5) / 8) * document.body.clientHeight + "px) scale(1.2)";
}

picbox.onmouseleave = function(e) {
    pic.style.transform = "translate(0) scale(1.0)";
}