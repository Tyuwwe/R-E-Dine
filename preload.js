const {  contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('REDAPI', {
    openIndex: () => ipcRenderer.send('window-index'),
    openOrder: () => ipcRenderer.send('window-order'),
    signup: () => ipcRenderer.send('user-signup'),
    login: () => ipcRenderer.send('user-login'),
    signup_reload_phone: () => ipcRenderer.send('signup_reload_phone'),
    signup_reload_id: () => ipcRenderer.send('signup_reload_id'),
    signup_reload_email: () => ipcRenderer.send('signup_reload_email')
})
