const { ipcRenderer } = require('electron')

function closeWindow() { // 声明一个函数
    alert("WWWWWW");
 	ipcRenderer.send('window-close');
}
