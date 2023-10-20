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

  win.loadFile('login.html');

  ipcMain.on('user-signup',function(){
    win.loadFile('signup.html');
  })

  ipcMain.on('user-login',function(){
    win.loadFile('login.html');
  })

  ipcMain.on('signup_reload_phone',function(){
    win.loadFile('signup-phone.html');
  })

  ipcMain.on('signup_reload_email',function(){
    win.loadFile('signup.html');
  })

  ipcMain.on('signup_reload_id',function(){
    win.loadFile('signup-id.html');
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
  })

  ipcMain.on('window-order' ,function(){
    const orderwin = new BrowserWindow({
      width: 400,
      height: 800,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    orderwin.loadURL(path.join('file:',__dirname,'order.html'));
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

