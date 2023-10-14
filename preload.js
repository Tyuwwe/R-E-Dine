const { ipcRenderer } = require('electron')

window.close = function () {
    ipcRenderer.send('window-close');
}
