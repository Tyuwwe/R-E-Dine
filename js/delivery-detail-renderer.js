const multiple = 20;
const mouseOverContainer = document.getElementsByClassName("deli-box-3d")[0];
const element = document.getElementById("orderbox");
const textcontainer = document.getElementsByClassName("deli-detail-upper-container")[0];

function transformElement(x, y) {
  let box = element.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / multiple;
  let calcY = (x - box.x - (box.width / 2)) / multiple;

  textcontainer.style.transform = "translate(" + calcY + "px, " + calcX * -5 + "px)";
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
      textcontainer.style.transform = "translate(0)"
    });
});