const {  contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('REDAPI', {
    close: () => ipcRenderer.send('window-close'),
    openIndex: () => ipcRenderer.send('window-index'),
    closeindex: () => ipcRenderer.send('index-close'),
    openOrder: () => ipcRenderer.send('window-order'),
    signup: () => ipcRenderer.send('user-signup'),
    login: () => ipcRenderer.send('user-login')
})