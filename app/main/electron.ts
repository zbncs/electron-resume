/**
 * electron 主进程入口
 */

const {BrowserWindow, app} = require('electron');
const path = require('path');

function isDev() {
    return process.env.NODE_ENV === 'development'
}

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: { // 只有设置了它才可以使用node模块
            nodeIntegration: true,
            devTools: true,
        }
    });
    if (isDev()) {
        mainWindow.loadURL('http://127.0.0.1:7001');
    }
    else {
        mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    }
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});




