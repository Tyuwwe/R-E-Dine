/*document.getElementById('loginBTN').addEventListener('click', () => {
    //window.REDAPI.openIndex();
})*/

document.getElementById('signupBTN').addEventListener('click', () => {
    window.REDAPI.signup();
})

document.getElementById('merchantswitch').addEventListener('click', () => {
    window.REDAPI.debug_reload_merchant();
})