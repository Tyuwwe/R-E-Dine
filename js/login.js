function login(login_username, login_password) {
    fetch('http://192.168.0.100:5000/login', {
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
    login(document.getElementsByClassName('text_id')[0].value, document.getElementsByClassName('text_password')[0].value);
})