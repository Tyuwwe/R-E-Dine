var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?') + 1);//获取问号后所有的字符串
var urlParmStrArray = urlParmStr.split("&");
//console.log(urlParmStr);
var default_url;
window.REDAPI.requestUrl().then(function (res) { default_url = res; getDishbyID();});

function getDishbyID() {
    //console.log(document.getElementById('f_imglink').value);
    fetch(default_url + '/dishes/' + urlParmStrArray[1], {
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
                document.getElementById('f_name').value = data.name;
                document.getElementById('f_price').value = data.price;
                document.getElementById('f_desc').value = data.description;
                document.getElementById('f_imglink').value = data.image_url;
            }
        })
}

function updateDish(f_name, f_desc, f_price, f_imglink) {
    //console.log(document.getElementById('f_imglink').value);
    fetch(default_url + '/dishes/' + urlParmStrArray[1], {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: f_name,
            description: f_desc,
            price: f_price,
            image_url: f_imglink,
            restaurant: urlParmStrArray[0]
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('上传失败:', data.error);
                document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>注册失败：" + data.error + "</div>";
                document.getElementsByClassName('warn-area')[0].style.height = "45px";
            } else {
                console.log('上传成功');
                window.close();
            }
        });
}

document.getElementById('addsubmit').addEventListener('click', () => {
    var warn_height = 0;
    var warn_flag = 0;
    document.getElementsByClassName('warn-area')[0].innerHTML = "";
    document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    //username is NULL
    if (document.getElementById('f_name').value == "") {
        warn_flag = 1;
        document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>添加失败：菜品名称不能为空</div>";
        warn_height += 45;
        document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    }
    //price is NULL
    if (document.getElementById('f_price').value == "") {
        warn_flag = 1;
        document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>添加失败：菜品售价不能为空</div>";
        warn_height += 45;
        document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    }
    //desc is NULL
    if (document.getElementById('f_desc').value == "") {
        document.getElementById('f_desc').value = "无描述";
    }
    //img is NULL
    if (document.getElementById('f_imglink').value == "") {
        document.getElementById('f_imglink').value = "https://ooo.0x0.ooo/2023/12/07/OAPfZL.jpg";
    }
    if (!warn_flag) {
        console.log("hi");
        setTimeout(updateDish(document.getElementById('f_name').value, document.getElementById('f_desc').value, document.getElementById('f_price').value, document.getElementById('f_imglink').value), 100);
    }
})
