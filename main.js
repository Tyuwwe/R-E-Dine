const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    }
  })

  win.loadFile('login.html')

  ipcMain.on('window-close',function(){
    app.quit();
  }) 
  
  ipcMain.on('window-index', function(){
    const indexwin = new BrowserWindow({
      width: 960,
      height: 540,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
      })
      indexwin.loadURL(path.join('file:',__dirname,'index.html'));
      win.close();
      ipcMain.on('index-close',function(){
        indexwin.destroy();
      }) 
      
  })

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

