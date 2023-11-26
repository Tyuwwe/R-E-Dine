var default_url;
window.REDAPI.requestUrl().then(function (res) {default_url = res});

function signup(signup_name, signup_email, signup_password) {
    fetch(default_url + '/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: signup_name,
        email: signup_email,
        password: signup_password
    })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('注册失败:', data.error);
        } else {
            console.log('注册成功，用户角色:', data.role);
            window.REDAPI.login();
        }
    })
    .catch((error) => {
        console.error('请求错误:', error);
    });
}

document.getElementById('signupBTN').addEventListener('click', () => {
    var warn_height = 0;
    var warn_flag = 0;
    document.getElementsByClassName('warn-area')[0].innerHTML = "";
    document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    //username is NULL
    if(document.getElementsByClassName('signup_username')[0].value == "") {
        warn_flag = 1;
        document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>注册失败：账号不能为空！</div>";
        warn_height += 45;
        document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    }
    //email is NULL
    if(document.getElementsByClassName('signup_email')[0].value == "") {
        warn_flag = 1;
        document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>注册失败：邮箱不能为空！</div>";
        warn_height += 45;
        document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    }
    //password is NULL
    if(document.getElementsByClassName('signup_password')[0].value == "") {
        warn_flag = 1;
        document.getElementsByClassName('warn-area')[0].innerHTML += "<div class='warn-area-items'>注册失败：密码不能为空！</div>";
        warn_height += 45;
        document.getElementsByClassName('warn-area')[0].style.height = warn_height + "px";
    }
    if(!warn_flag) {
        //console.log(md5(document.getElementsByClassName('signup_password')[0].value));
        signup(document.getElementsByClassName('signup_username')[0].value, document.getElementsByClassName('signup_email')[0].value, md5(document.getElementsByClassName('signup_password')[0].value));
    }
})

document.getElementById('returnBTN').addEventListener('click', () => {
    window.REDAPI.login();
})