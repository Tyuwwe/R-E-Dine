const {  contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('REDAPI', {
    close: () => ipcRenderer.send('window-close')
});

contextBridge.exposeInMainWorld('RED', {
    openIndex: () => ipcRenderer.send('window-index')
});