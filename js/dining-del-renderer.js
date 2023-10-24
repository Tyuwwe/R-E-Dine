var deleteFood = document.getElementsByClassName('food-del');

for(i = 0; i < deleteFood.length; i++) {
    deleteFood[i].addEventListener('click', (e) => {
        deleteFood[e.target.id].style.transform = "translate(-200%, 0px)";
        deleteFood[e.target.id].style.height = "0px";
        deleteFood[e.target.id].style.margin = "0";
        //setTimeout(deleteFood[e.target.id].style.height = "0px", 500);
    })
}

document.getElementById('delSubmit').addEventListener('click', () => {
    window.close();
})