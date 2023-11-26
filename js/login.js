var default_url;
window.REDAPI.requestUrl().then(function (res) {default_url = res});

function login(login_username, login_password) {
    fetch(default_url + '/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: login_username,
        password: login_password
    })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('登录失败:', data.error);
            document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>登录失败：" + data.error + "</div>";
            document.getElementsByClassName('warn-area')[0].style.height = "45px";
        } else {
            console.log('登录成功，用户角色:', data.role);
            console.log('登录成功，用户ID:', data.id);
            window.REDAPI.user_login(data.id, data.role);
        }
    })
    .catch((error) => { 
        console.error('请求错误:', error);
    });
}

document.getElementById('loginBTN').addEventListener('click', () => {
    var warn_height = 0;
    var warn_flag = 0;
    document.getElementsByClassName('warn-area')[0].innerHTML = "";
    document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    //username is NULL
    if(document.getElementsByClassName('text_id')[0].value == "") {
        warn_flag = 1;
        document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>登录失败：账号不能为空</div>";
        warn_height += 45;
        document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    }
    //password is NULL
    if(document.getElementsByClassName('text_password')[0].value == "") {
        warn_flag = 1;
        document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>登录失败：密码不能为空</div>";
        warn_height += 45;
        document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    }
    if(!warn_flag) {
        //console.log(md5(document.getElementsByClassName('text_password')[0].value));
        login(document.getElementsByClassName('text_id')[0].value, md5(document.getElementsByClassName('text_password')[0].value));
    }
})