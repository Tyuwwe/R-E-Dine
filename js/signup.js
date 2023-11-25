function signup(signup_name, signup_email, signup_password) {
    fetch('http://192.168.0.100:5000/users', {
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
    signup(document.getElementsByClassName('signup_username')[0].value, document.getElementsByClassName('signup_email')[0].value, document.getElementsByClassName('signup_password')[0].value);
})