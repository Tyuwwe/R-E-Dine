const { app, BrowserWindow, ipcMain, nativeTheme, shell } = require('electron')
const path = require('node:path')
var user_id = 0;
var default_url = "http://localhost:5000";

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

  ipcMain.on('window-login',function(){
    win.loadFile('login.html');
  })

  ipcMain.on('user-login',function(event, userId, userRole){
    console.log('Login Successful. Received User ID:', userId, 'User Role:', userRole);
    user_id = userId;
    if(userRole == "customer") {
      const indexwin = new BrowserWindow({
        width: 960,
        height: 540,
        frame: false,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js'),
          contextIsolation: true,
        }
      })

      indexwin.loadURL(path.join('file:',__dirname,'choose-rest.html'));
      win.close();

      ipcMain.on('choose-chinese', function(){
        indexwin.loadURL(path.join('file:',__dirname,'rest-list.html?chinese'));
      })
  
      ipcMain.on('choose-western', function(){
        indexwin.loadURL(path.join('file:',__dirname,'rest-list.html?western'));
      })

      ipcMain.on('requestID', function() {
        indexwin.webContents.send('returnID', user_id);
      })
    }
    else if(userRole == "delivery") {
      win.loadFile("delivery-index.html");

      ipcMain.on('order-detail', function(event, orderID){
        console.log('openDetailPage, ID=', orderID);
        const orderdetailwin = new BrowserWindow({
          width: 580,
          height: 840,
          frame: false,
          webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
          }
        })
        orderdetailwin.loadURL(path.join('file:',__dirname,'delivery-detail.html?' + orderID));

        ipcMain.on('open-time', function() {
          const timewin = new BrowserWindow({
            width: 600,
            height: 800,
            frame: false,
            webPreferences: {
              preload: path.join(__dirname, 'preload.js'),
              contextIsolation: true,
            }
          })
          timewin.loadURL(path.join('file:',__dirname,'delivery-time.html'));

          ipcMain.on('close-time', function() {
            if(timewin) timewin.destroy();
          })
        })
      })
    }
    else {
        win.loadURL(path.join('file:',__dirname,'dining-index.html?' + userRole));
    }
  });

  ipcMain.on('open-github',function(){
    shell.openExternal('https://github.com/1324151534/R-E-Dine');
  })

  ipcMain.on('window-settings', function(){
    const settingswin = new BrowserWindow({
      width: 400,
      height: 640,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    settingswin.loadURL(path.join('file:',__dirname,'settings.html'));
  })

  let diningwin_index;

  ipcMain.on('debug_reload_merchant', function(){
    diningwin_index = new BrowserWindow({
      width: 960,
      height: 740,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    diningwin_index.loadURL(path.join('file:',__dirname,'dining-index.html'));
    win.close();
  })

  ipcMain.on('diningRefresh', function(){
    console.log(diningwin_index);
  })

  ipcMain.on('debug_reload_merchant_add', function(event, userRole){
    const diningwin = new BrowserWindow({
      width: 400,
      height: 800,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    diningwin.loadURL(path.join('file:',__dirname,'dining-add.html?' + userRole));
  })

  ipcMain.on('debug_reload_merchant_edit', function(event, userRole){
    const diningwin = new BrowserWindow({
      width: 800,
      height: 800,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    diningwin.loadURL(path.join('file:',__dirname,'dining-edit.html?' + userRole));
  })

  ipcMain.on('debug_reload_merchant_edit_attr', function(event, userRole, dish_id){
    const diningwin = new BrowserWindow({
      width: 400,
      height: 800,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    diningwin.loadURL(path.join('file:',__dirname,'dining-edit-attr.html?' + userRole + "&" + dish_id));
  })

  ipcMain.on('debug_reload_merchant_del', function(event, userRole){
    const diningwin = new BrowserWindow({
      width: 700,
      height: 800,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    diningwin.loadURL(path.join('file:',__dirname,'dining-del.html?' + userRole));
  })

  ipcMain.on('window-order' ,function(event, orderID){
    const orderwin = new BrowserWindow({
      width: 400,
      height: 800,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
      }
    })
    orderwin.loadURL(path.join('file:',__dirname,'order.html?' + orderID));
  })

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}

ipcMain.handle('requestURL', () => {
  return default_url;
})

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

