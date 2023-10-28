function getlist() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId=1', true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //console.log(xhr.response);
            var o = eval("(" + xhr.responseText + ")");
            for(i = 0; i < o.length; i++) {
                console.log(o[i].body);
                addElement(o[i].title);
            }
        }
    }
}

document.getElementById('syncBTN').addEventListener('click', () => {
    getlist();
})


function addElement(body) {
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(body);
    let newImg = document.createElement("img");
    newDiv.appendChild(newContent);
    newDiv.appendChild(newImg);
    newImg.src = "./assets/pic/food.jpg";
  
    let currentDiv = document.getElementById("div-list");
    currentDiv.appendChild(newDiv);
    newDiv.className = "list-item";
    newImg.className = "syncIMG";
}