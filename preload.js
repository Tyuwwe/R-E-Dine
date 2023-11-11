const {  contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('REDAPI', {
    openIndex: () => ipcRenderer.send('window-index'),
    openOrder: () => ipcRenderer.send('window-order'),
    signup: () => ipcRenderer.send('user-signup'),
    login: () => ipcRenderer.send('user-login'),
    settings: () => ipcRenderer.send('window-settings'),
    open_github: () => ipcRenderer.send('open-github'),
    signup_reload_phone: () => ipcRenderer.send('signup_reload_phone'),
    signup_reload_id: () => ipcRenderer.send('signup_reload_id'),
    signup_reload_email: () => ipcRenderer.send('signup_reload_email'),
    debug_reload_merchant : () => ipcRenderer.send('debug_reload_merchant'),
    debug_reload_merchant_add : () => ipcRenderer.send('debug_reload_merchant_add'),
    debug_reload_merchant_del : () => ipcRenderer.send('debug_reload_merchant_del'),
    debug_reload_merchant_edit : () => ipcRenderer.send('debug_reload_merchant_edit'),
    debug_reload_merchant_edit_attr : () => ipcRenderer.send('debug_reload_merchant_edit_attr'),
    choose_chinese : () => ipcRenderer.send('choose-chinese'),
    choose_western : () => ipcRenderer.send('choose-western'),
})

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})