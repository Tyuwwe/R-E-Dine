var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串
//console.log(urlParmStr);
var default_url;
window.REDAPI.requestUrl().then(function (res) {default_url = res; getdish(res)});

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
                newdiv.setAttribute("class", "food-del-edit");
                newdiv.setAttribute("id", "div" + data[i].id);
                newdiv.innerHTML = "<f id='" + data[i].id + "' class='food-edit-info'><div class='food-warn'>编辑此项菜品</div></f><div class='food-del-container'><img class='food-del-pic' src='" + getIMGtn(data[i]) + "'><div class='food-name'>" + data[i].name + "</div><div class='food-price-storage'><div class='food-price'>" + data[i].price + "元</div></div></div>";      
                document.getElementById('foodlist-box').appendChild(newdiv);
            }
            addEditEvent();
        }
    })
}
var editFood = document.getElementsByClassName('food-del-edit');
function addEditEvent() {
    for(i = 0; i < editFood.length; i++) {
        editFood[i].addEventListener('click', (e) => {
            window.REDAPI.debug_reload_merchant_edit_attr(urlParmStr, e.target.id);
            //setTimeout(editFood[e.target.id].style.height = "0px", 500);
        })
    }
}


document.getElementById('editSubmit').addEventListener('click', () => {
    window.close();
})

setInterval(() => {
    document.getElementById('foodlist-box').innerHTML = '';
    getdish(default_url);
    //location.reload();
}, 5000);