var orders;

function getorder() {
    fetch('http://192.168.0.100:5000/orders' , {
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
            //console.log(data);
            for (var i = 1; i <= Object.keys(data).length; i++) {
                //console.log(i);
                var newdiv = document.createElement('div');
                newdiv.setAttribute("class", "deli-order");
                newdiv.setAttribute("id", data[i-1].order_id);
                newdiv.innerHTML = "<div class='deli-order-left'><div class='deli-order-title'>西安市</div><div class='deli-order-dest'>长安区-雁塔区</div><div class='deli-order-len'>" + data[i-1].distance + "km</div></div><div class='deli-order-right'><div class='deli-order-user'>用户ID："+ data[i-1].user_id +"</div><div class='deli-order-price'><i class='fa fa-yen'></i> " + Number(data[i-1].total_price)/10 + "</div></div>";                
                document.getElementById('orderbox').appendChild(newdiv);
            }
            orders = document.getElementsByClassName('deli-order');
            for(var i = 0; i < orders.length; i++) {
                orders[i].addEventListener("click", function(btn) {
                    console.log(btn.target.id);
                    window.REDAPI.openOrderDetail(btn.target.id);
                })
            }
        }
    })
}

getorder();

document.getElementById('refresh').addEventListener('click', () => {
    document.getElementById('orderbox').innerHTML='';
    getorder();
})