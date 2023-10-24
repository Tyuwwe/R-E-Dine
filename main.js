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

  ipcMain.on('debug_reload_merchant', function(){
    const diningwin = new BrowserWindow({
      width: 960,
      height: 540,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    diningwin.loadURL(path.join('file:',__dirname,'dining-index.html'));
    win.close();
  })

  ipcMain.on('debug_reload_merchant_add', function(){
    const diningwin = new BrowserWindow({
      width: 400,
      height: 800,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    diningwin.loadURL(path.join('file:',__dirname,'dining-add.html'));
  })

  ipcMain.on('debug_reload_merchant_del', function(){
    const diningwin = new BrowserWindow({
      width: 700,
      height: 800,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    diningwin.loadURL(path.join('file:',__dirname,'dining-del.html'));
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

