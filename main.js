const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 350,
    height: 580,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })


  mainWindow.loadFile('index.html')
}


Menu.setApplicationMenu(null);

app.disableHardwareAcceleration();


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
