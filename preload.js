const {  contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('REDAPI', {
    close: () => ipcRenderer.send('window-close'),
    openIndex: () => ipcRenderer.send('window-index'),
    closeindex: () => ipcRenderer.send('index-close'),
    openOrder: () => ipcRenderer.send('window-order'),
    signup: () => ipcRenderer.send('user-signup'),
    login: () => ipcRenderer.send('user-login'),
    signup_reload_phone: () => ipcRenderer.send('signup_reload_phone'),
    signup_reload_id: () => ipcRenderer.send('signup_reload_id'),
    signup_reload_email: () => ipcRenderer.send('signup_reload_email')
})