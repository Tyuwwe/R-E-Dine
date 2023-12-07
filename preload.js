const {  contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('REDAPI', {
    openIndex: () => ipcRenderer.send('window-index'),
    openOrder: (orderID) => ipcRenderer.send('window-order', orderID),
    signup: () => ipcRenderer.send('user-signup'),
    login: () => ipcRenderer.send('window-login'),
    user_login: (user_id, user_role) => ipcRenderer.send('user-login', user_id, user_role),
    settings: () => ipcRenderer.send('window-settings'),
    open_github: () => ipcRenderer.send('open-github'),
    debug_reload_merchant : () => ipcRenderer.send('debug_reload_merchant'),
    debug_reload_merchant_add : (userRole) => ipcRenderer.send('debug_reload_merchant_add', userRole),
    debug_reload_merchant_del : (userRole) => ipcRenderer.send('debug_reload_merchant_del', userRole),
    debug_reload_merchant_edit : (userRole) => ipcRenderer.send('debug_reload_merchant_edit', userRole),
    debug_reload_merchant_edit_attr : (userRole, dish_id) => ipcRenderer.send('debug_reload_merchant_edit_attr', userRole, dish_id),
    choose_chinese : () => ipcRenderer.send('choose-chinese'),
    choose_western : () => ipcRenderer.send('choose-western'),
    requestID : () => ipcRenderer.send('requestID'),
    returnID : (user_id) => ipcRenderer.on('returnID', user_id),
    openOrderDetail : (order_id) => ipcRenderer.send('order-detail', order_id),
    openTime : () => ipcRenderer.send('open-time'),
    closeTime : () => ipcRenderer.send('close-time'),
    requestUrl : () => ipcRenderer.invoke('requestURL')
})

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})