// Initialisation des modules 
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 700,
        height: 700,
        transparent: true
    })

    win.loadURL('http://localhost:8050');
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if(process.platform != "darwin"){
        app.quit();
    }
})
