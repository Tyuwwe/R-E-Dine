var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串
console.log(urlParmStr);
var default_url;
window.REDAPI.requestUrl().then(function (res) {default_url = res; getdish(res)});
//fetch(url + '/dishes?type=' + urlParmStr

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
                newdiv.setAttribute("class", "food-del");
                newdiv.setAttribute("id", "div" + data[i].id);
                newdiv.innerHTML = "<f id='" + data[i].id + "' class='food-del-info'><div class='food-warn'>删除此项菜品</div></f><div class='food-del-container'><img class='food-del-pic' src='" + getIMGtn(data[i]) + "'><div class='food-name'>" + data[i].name + "</div><div class='food-price-storage'><div class='food-price'>" + data[i].price + "元</div></div></div>";      
                document.getElementById('foodlist-box').appendChild(newdiv);
            }
            addDelEvent();
        }
    })
}

var deleteFood = document.getElementsByClassName('food-del');

function addDelEvent() {
    for(i = 0; i < deleteFood.length; i++) {
        deleteFood[i].addEventListener('click', (e) => {
            document.getElementById("div" + e.target.id).style.transform = "translate(-200%, 0px)";
            document.getElementById("div" + e.target.id).style.height = "0px";
            document.getElementById("div" + e.target.id).style.margin = "0";
            //deleteFood[e.target.id].style.transform = "translate(-200%, 0px)";
            //setTimeout(deleteFood[e.target.id].style.height = "0px", 500);
            delDish(e.target.id);
        })
    }
}

document.getElementById('delSubmit').addEventListener('click', () => {
    window.close();
})

function delDish(dishID) {
    fetch(default_url + '/dishes/' + dishID, {
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