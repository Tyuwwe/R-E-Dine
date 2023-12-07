var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串
//console.log(urlParmStr);
var default_url;
window.REDAPI.requestUrl().then(function (res) {default_url = res; getdish(res)});

if (urlParmStr == "western") {
    document.getElementsByClassName('rest-name')[0].innerHTML = "Western Restaurant";
    document.getElementsByClassName('rest-subtitle')[0].innerHTML = "A Western Restaurant";
}

function getdish(url) {
    fetch(url + '/dishes?type=' + urlParmStr , {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('获取餐品失败:', data.error);
        } else {
            //console.log(data);
            for (var i = 1; i <= Object.keys(data).length; i++) {
                //console.log(i);
                var newdiv = document.createElement('div');
                newdiv.setAttribute("class", "foodlist-item");
                newdiv.innerHTML = "<img class='foodlist-item-img' src='" + getIMGtn(data[i - 1]) + "'><div class='foodlist-right-container'><div class='foodlist-foodname'>" + data[i - 1].name + "</div><div class='foodlist-price'><div class='foodlist-pricetext'>" + data[i - 1].price + "</div><div class='foodlist-yuan'>元</div></div></div><div class='num-container'><input id='" + data[i-1].id + "'class='num-number' type='number' min='0' max='9' step='1' value='0'></div>";                
                document.getElementById('foodlist-box').appendChild(newdiv);
            }
        }
    })
}

var orderlist = [];
var user_id = 0;
window.REDAPI.returnID((_value, userID) => {
    user_id = userID;
    console.log(user_id);
});
window.REDAPI.requestID();

var orderID;

function order() {
    var num = document.getElementsByClassName('num-number');
    for(var i = 0; i < num.length; i++) {
        if(num[i].value > 0) {
            orderlist.push({dish_id : num[i].id, quantity : num[i].value})
        }
    }
    fetch(default_url + '/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id : user_id,
            order_details : orderlist
        })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('提交失败');
            } else {
                console.log('提交成功');
                window.REDAPI.openOrder(data.order_id);
            }
        })
        .catch((error) => {
            console.error('请求错误:', error);
        });
}

document.getElementById('submit').addEventListener('click', () =>{
    order();
})