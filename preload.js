const {  contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('REDAPI', {
    close: () => ipcRenderer.send('window-close'),
    openIndex: () => ipcRenderer.send('window-index'),
    closeindex: () => ipcRenderer.send('index-close')
})