document.getElementById('closeWindow').addEventListener('click', () => {
    //window.close();
    console.log("func1");
    window.REDAPI.close();
})

document.getElementById('loginBTN').addEventListener('click', () => {
    console.log("func2");
    window.RED.openIndex();
})