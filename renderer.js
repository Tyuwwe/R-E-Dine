document.getElementById('closeWindow').addEventListener('click', () => {
    //window.close();
    //console.log("func1");
    window.REDAPI.close();
})

document.getElementById('loginBTN').addEventListener('click', () => {
    //console.log("func2");
    window.REDAPI.openIndex();
})

document.getElementById('closeIndexWindow').addEventListener('click', () => {
    //window.close();
    //console.log("func1");
    window.REDAPI.closeindex();
})