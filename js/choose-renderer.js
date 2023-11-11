var select = document.getElementsByClassName('rest-container');

for(i = 0; i < select.length; i++) {
    select[i].addEventListener('click', () => {
        console.log('hi');
    })
}