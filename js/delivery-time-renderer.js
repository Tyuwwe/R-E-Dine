const multiple = 20;
const mouseOverContainer = document.getElementsByClassName("outside-box")[0];
const element = document.getElementById("orderbox");
const textcontainer = document.getElementsByClassName("deli-detail-upper-container")[0];

function transformElement(x, y) {
  let box = element.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / multiple;
  let calcY = (x - box.x - (box.width / 2)) / multiple;

  textcontainer.style.transform = "translate(" + calcY * 3 + "px, " + calcX * -5 + "px) scale(0.9)";
  element.style.transform  = "rotateX("+ calcX +"deg) " + "rotateY("+ calcY +"deg)";
}

mouseOverContainer.addEventListener('mousemove', (e) => {
  window.requestAnimationFrame(function(){
    transformElement(e.clientX, e.clientY);
  });
});

mouseOverContainer.addEventListener('mouseleave', (e) => {
    window.requestAnimationFrame(function(){
      element.style.transform = "rotateX(0) rotateY(0)";
      textcontainer.style.transform = "translate(0) scale(1)"
    });
});

var hour = document.getElementsByClassName('deli-hour')[0];
var min = document.getElementsByClassName('deli-min')[0];
var sec = document.getElementsByClassName('deli-sec')[0];
21
function time() {
    if(Number(sec.innerHTML) - 1 < 0) {
      if(Number(min.innerHTML) - 1 < 0) {
        if(Number(hour.innerHTML) - 1 < 0) {
          hour.innerHTML = "00";
          min.innerHTML = "00";
          sec.innerHTML = "00";
        }
        else {
          hour.innerHTML = Number(hour.innerHTML) - 1;
          if(Number(hour.innerHTML) < 10) {
            hour.innerHTML = "0" + hour.innerHTML;
          }
          min.innerHTML = 59;
        }

      }
      else {
        min.innerHTML = Number(min.innerHTML) - 1;
        if(Number(min.innerHTML) < 10) {
          min.innerHTML = "0" + min.innerHTML;
        }
        sec.innerHTML = 59;
      }
    }
    else {
      sec.innerHTML = Number(sec.innerHTML) - 1;
      if(Number(sec.innerHTML) < 10) {
        sec.innerHTML = "0" + sec.innerHTML;
      }
    }
    setTimeout("time()",1000 ); 
}

setTimeout("time()",1000 ); 

document.getElementById('closeWindow').addEventListener('click', () => {
  window.REDAPI.closeTime();
})