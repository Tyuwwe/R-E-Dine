document.getElementById('closeWindow').addEventListener('click', () => {
    window.REDAPI.close();
})

document.getElementById('loginBTN').addEventListener('click', () => {
    window.REDAPI.openIndex();
})

document.getElementById('signupBTN').addEventListener('click', () => {
    window.REDAPI.signup();
})