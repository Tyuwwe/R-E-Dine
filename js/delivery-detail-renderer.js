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

var orders;
var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串

function getorder() {
    fetch('http://192.168.0.100:5000/orders/' + urlParmStr , {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('获取订单失败:', data.error);
        } else {
            document.getElementsByClassName('deli-detail-subtitle')[0].innerHTML = "配送距离：" + data.distances + "km";
            document.getElementsByClassName('deli-detail-time')[0].innerHTML = "订单时间：" + data.created_at;
            for(var i = 0; i < Object.keys(data.order_details).length; i++) {
              var newdiv = document.createElement('div');
              newdiv.setAttribute("class", "deli-detail-order");
              newdiv.innerHTML = "<div class='deli-detail-order-name'>" + data.order_details[i].name + "</div><div class='deli-detail-order-count'>×" + data.order_details[i].quantity + "</div><div class='deli-detail-order-price'>" + data.order_details[i].price + "元</div>";
              document.getElementById('orderbox2').appendChild(newdiv);
            }
            document.getElementById('cash').innerHTML = "接单利润：" + Number(data.total_price)/10 + "元";
        }
    })
}

getorder();

function del_order() {
  var num = document.getElementsByClassName('num-number');
  for(var i = 0; i < num.length; i++) {
      if(num[i].value > 0) {
          orderlist.push({dish_id : num[i].id, quantity : num[i].value})
      }
  }
  fetch('http://192.168.0.100:5000/orders/' + urlParmStr , {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      }
      })
      .then(response => response.json())
      .then(data => {
          if (data.error) {
              console.error('提交失败');
          } else {
              console.log('提交成功');
          }
      })
      .catch((error) => {
          console.error('请求错误:', error);
      });
}

document.getElementById('detail-summit').addEventListener('click', () => {
    del_order();
    window.REDAPI.openTime();
})