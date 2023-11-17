var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串
console.log(urlParmStr);

if (urlParmStr == "western") {
    document.getElementsByClassName('rest-name')[0].innerHTML = "Western Restaurant";
    document.getElementsByClassName('rest-subtitle')[0].innerHTML = "A Western Restaurant";
}

document.getElementById('submit').addEventListener('click', () =>{
    window.REDAPI.openOrder();
})