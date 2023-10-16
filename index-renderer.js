document.getElementById('closeIndexWindow').addEventListener('click', () => {
    //window.close();
    //console.log("func1");
    window.REDAPI.closeindex();
})

var orderbtn = document.getElementsByClassName('order-list');
for (i = 0; i < orderbtn.length; i++) {
    orderbtn[i].addEventListener('click', (btn) => {
        var select = document.getElementById(btn.target.id);
        if( select.className == "order-list" ) {
            select.setAttribute("class", "order-list-clicked");
        }
        else {
            select.setAttribute("class", "order-list");
        }
    })
}

var restbtn = document.getElementsByClassName('rest-list-btn');
for (i = 0; i < restbtn.length; i++) {
    restbtn[i].addEventListener('click', (btn) => {
        var select = document.getElementById(btn.target.id);
        if( select.className == "rest-list-btn" ) {
            select.setAttribute("class", "rest-list-btn-selected");
            select.innerHTML = "Selected";
            //console.log(select.id);
            showorder(select.id);
        }
        else {
            select.setAttribute("class", "rest-list-btn");
            select.innerHTML = "Select";
            hideorder(select.id);
        }
    })
}

function showorder(rest) {
    var order = document.getElementsByName(rest);
    for(i = 0; i < order.length; i++) {
        if((order.className!="rest-list-btn")&&(order.className!="rest-list-btn-selected")) {
            order[i].style.display = "flex";
        }
    }
}

function hideorder(rest) {
    var order = document.getElementsByName(rest);
    for(i = 0; i < order.length; i++) {
        if((order.className!="rest-list-btn")&&(order.className!="rest-list-btn-selected")) {
            order[i].style.display = "none";
        }
    }
}