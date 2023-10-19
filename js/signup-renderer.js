document.getElementById('closeWindow').addEventListener('click', () => {
    window.close();
})

document.getElementById('dropBTN').addEventListener('mouseover', () => {
    var btn = document.getElementsByClassName('drop-list-button');
    for(i = 0; i < btn.length; i++) {
        btn[i].style.transform = "scale(1)";
        document.getElementById('dropSVG').style.transform = "rotate(0deg)";
        document.getElementById('dropdown-content').style.height = "65px";
        document.getElementById('dropBTN').style.backgroundColor = "var(--main-orange)";
        document.getElementById('dropBTN').style.color = "white";
        document.getElementById('dropSVG').style.filter = "invert(1)";
    }
})

document.getElementById('dropBTN').addEventListener('click', () => {
    var btn = document.getElementsByClassName('drop-list-button');
    for(i = 0; i < btn.length; i++) {
        btn[i].style.transform = "scale(0)";
        document.getElementById('dropSVG').style.transform = "rotate(-90deg)";
        document.getElementById('dropdown-content').style.height = "0px";
        document.getElementById('dropBTN').style.backgroundColor = "transparent";
        document.getElementById('dropBTN').style.color = "var(--light-gray)";
        document.getElementById('dropSVG').style.filter = "invert(50%) sepia(37%) saturate(9%) hue-rotate(344deg) brightness(101%) contrast(94%)";
    }
})

var dropBTNs = document.getElementsByClassName('drop-list-button');
for(i = 0; i < dropBTNs.length; i++) {
    dropBTNs[i].addEventListener('mouseout', () => {
        var btn = document.getElementsByClassName('drop-list-button');
        for(i = 0; i < btn.length; i++) {
            btn[i].style.transform = "scale(0)";
        }
        document.getElementById('dropdown-content').style.height = "0px";
        document.getElementById('dropSVG').style.transform = "rotate(-90deg)";
        document.getElementById('dropBTN').style.backgroundColor = "transparent";
        document.getElementById('dropBTN').style.color = "var(--light-gray)";
        document.getElementById('dropSVG').style.filter = "invert(50%) sepia(37%) saturate(9%) hue-rotate(344deg) brightness(101%) contrast(94%)";
    })
}

document.getElementById('dropdown-content').addEventListener('mouseover', () => {
    var btn = document.getElementsByClassName('drop-list-button');
    for(i = 0; i < btn.length; i++) {
        btn[i].style.transform = "scale(1)";
        document.getElementById('dropSVG').style.transform = "rotate(0deg)";
        document.getElementById('dropdown-content').style.height = "65px";
        document.getElementById('dropBTN').style.backgroundColor = "var(--main-orange)";
        document.getElementById('dropBTN').style.color = "white";
        document.getElementById('dropSVG').style.filter = "invert(1)";
    }
})

document.getElementById('signupBTN').addEventListener('click', () => {
    window.REDAPI.login();
})

var swithcBTNs = document.getElementsByClassName('drop-list-button');
for(i = 0; i < swithcBTNs.length; i++) {
    if(swithcBTNs[i].id == 'use_phoneBTN') {
        swithcBTNs[i].addEventListener('click', () => {
            window.REDAPI.signup_reload_phone();
        })
    }
    else if (swithcBTNs[i].id == 'use_IDBTN') {
        swithcBTNs[i].addEventListener('click', () => {
            window.REDAPI.signup_reload_id();
        })
    }
    else if (swithcBTNs[i].id == 'use_emailBTN') {
        swithcBTNs[i].addEventListener('click', () => {
            window.REDAPI.signup_reload_email();
        })
    }
}