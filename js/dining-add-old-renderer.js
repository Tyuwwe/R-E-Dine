var inputFile = document.getElementById('f_addpic');

inputFile.addEventListener('change', () => {
    var file = inputFile.files[0];
    var src = window.URL.createObjectURL(file);
    document.getElementById('f_addpic-img').src = src;
    document.getElementById('f_addpic-img').style.height = "200px";
})