var url = document.location.toString();
var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串
var default_url;
window.REDAPI.requestUrl().then(function (res) {default_url = res; getorders(res)});
//console.log(urlParmStr);

function getorders(url) {
    fetch(url + '/orders/' + urlParmStr , {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementsByClassName("WaitingText")[0].style = 'animation: none; color = var(--main-orange);';
            document.getElementsByClassName("WaitingText")[0].innerHTML = '接单成功！';
        } else {
            setTimeout(getorders(default_url), 5000);
        }
    })
}