var editFood = document.getElementsByClassName('food-del-edit');

for(i = 0; i < editFood.length; i++) {
    editFood[i].addEventListener('click', () => {
        window.REDAPI.debug_reload_merchant_edit_attr();
        //setTimeout(editFood[e.target.id].style.height = "0px", 500);
    })
}

document.getElementById('editSubmit').addEventListener('click', () => {
    window.close();
})