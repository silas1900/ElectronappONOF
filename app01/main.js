const { app, BrowserWindow } = require('electron')
const path = require('path')
const { electron } = require('process')



function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/lightning.png',
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
    }
  })
  win.setResizable(false) // bloqueia a Maximizacao da tela
  win.setMenu(null) // remove a barra de menu
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
// compatibilidade
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})