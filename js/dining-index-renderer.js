var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串
//console.log(urlParmStr);
var default_url;
window.REDAPI.requestUrl().then(function (res) {default_url = res; getdish(res)});

document.getElementById('addBTN').addEventListener('click', () => {
    window.REDAPI.debug_reload_merchant_add(urlParmStr);
})

document.getElementById('delBTN').addEventListener('click', () => {
    window.REDAPI.debug_reload_merchant_del(urlParmStr);
})

document.getElementById('editBTN').addEventListener('click', () => {
    window.REDAPI.debug_reload_merchant_edit(urlParmStr);
})

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
            for (var i = 0; i < Object.keys(data).length; i++) {
                //console.log(i);
                var newdiv = document.createElement('div');
                newdiv.setAttribute("class", "dining-food");
                newdiv.innerHTML = "<img class='dining-food-img' src='" + getIMGtn(data[i]) + "'><div class='dining-food-info'><div class='dining-food-title'>" + data[i].name + "</div><div class='dining-food-cost'>" + data[i].price + "元</div></div>";                
                document.getElementById('foodlist-box').appendChild(newdiv);
            }
        }
    })
}

setInterval(() => {
    document.getElementById('foodlist-box').innerHTML = '';
    getdish(default_url);
    //location.reload();
}, 5000);
