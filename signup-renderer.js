document.getElementById('closeWindow').addEventListener('click', () => {
    window.close();
})

document.getElementById('dropBTN').addEventListener('mouseover', () => {
    var btn = document.getElementsByClassName('drop-list-button');
    for(i = 0; i < btn.length; i++) {
        btn[i].style.transform = "scale(1)";
        document.getElementById('dropSVG').style.transform = "rotate(0deg)";
        document.getElementById('dropdown-content').style.height = "65px";
        document.getElementById('dropBTN').style.backgroundColor = "#ff6200";
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
        document.getElementById('dropBTN').style.backgroundColor = "#ffffff00";
        document.getElementById('dropBTN').style.color = "#8b8b8b";
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
        document.getElementById('dropBTN').style.backgroundColor = "#ffffff00";
        document.getElementById('dropBTN').style.color = "#8b8b8b";
        document.getElementById('dropSVG').style.filter = "invert(50%) sepia(37%) saturate(9%) hue-rotate(344deg) brightness(101%) contrast(94%)";
    })
}

document.getElementById('dropdown-content').addEventListener('mouseover', () => {
    var btn = document.getElementsByClassName('drop-list-button');
    for(i = 0; i < btn.length; i++) {
        btn[i].style.transform = "scale(1)";
        document.getElementById('dropSVG').style.transform = "rotate(0deg)";
        document.getElementById('dropdown-content').style.height = "65px";
        document.getElementById('dropBTN').style.backgroundColor = "#ff6200";
        document.getElementById('dropBTN').style.color = "white";
        document.getElementById('dropSVG').style.filter = "invert(1)";
    }
})

document.getElementById('signupBTN').addEventListener('click', () => {
    window.REDAPI.login();
})