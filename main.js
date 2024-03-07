var  {app, BrowserWindow} = require('electron');
var path = require('path');
var url = require('url');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
//electron-packager . 三叔文字转图片工具 1.0--platform=win32 --arch=x64 --icon=favicon.ico --out=./out2 --asar --app-version=0.0.1 --overwrite --ignore=node_modules --asar
var win;
function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,//设置窗口宽度
        height: 600,//设置窗口高度
        alwaysOnTop: false,//设置窗口是否一直保持在其他窗口前面    默认是false
        modal: true,//模态窗口
        frame: true,//设置为 false 时可以创建一个无边框窗口 默认值为 true
        minWidth:600,//设置窗口最小宽度
        minHeight:400,//设置窗口最小高度
        maxWidth:800,//设置窗口最小宽度
        maxHeight:550,//设置窗口最小高度


        darkTheme: true,//强制窗口使用深色主题，只在部分GTK+3桌面环境下有效。 默认值为 false.
        resizable: true,//用户是否可以调整窗口大小
        minimizable: false,//窗口是否显示默认的最小化
        maximizable: false,//窗口是否显示默认的最大化
        // transparent: true,//使窗口 透明。 默认值为 false. 在Windows上，仅在无边框窗口下起作用。
        icon:'favicon.ico',//窗口图标。 在 Windows 上推荐使用 ICO 图标来获得最佳的视觉效果, 默认使用可执行文件的图标.
        // show: false,// 显示窗口将没有视觉闪烁（配合ready-to-show事件）
        webPreferences: {
           devTools: false,//客户端能否关闭开发者工具
            //  devTools: true,//客户端能否打开开发者工具（快捷键：ctrl+shift+i）
            // nodeIntegration: true,//是否启用Node integration. 默认值为 false.
            // enableRemoteModule: true, // 使用remote模块(electron 12 版本之后就不使用这个模块了注意)


            //是否在独立 JavaScript 环境中运行 Electron API和指定的preload 脚本. 默认为 true。 预加载脚本所运行的上下文环境只能访问其自身专用的文档和全局窗口，其自身一系列内置的JavaScript (Array, Object, JSON, 等等) 也是如此，这些对于已加载的内容都是不可见的。 Electron API 将只在预加载脚本中可用，在已加载页面中不可用。 这个选项应被用于加载可能不被信任的远程内容时来确保加载的内容无法篡改预加载脚本和任何正在使用的Electron api。 该选项使用的是与Chrome内容脚本相同的技术。 你可以在开发者工具Console选项卡内顶部组合框中选择 'Electron Isolated Context'条目来访问这个上下文。
            contextIsolation: false,
        },
    });
    win.setFullScreen(true);

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // win.once('ready-to-show', () => {
    //     win.show()
    // })

    // Open the DevTools.
    // win.webContents.openDevTools()
    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should devare the corresponding element.
        win = null
    });
    // require('electron').webFrame.setZoomLevelLimits(1,1);


}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    createWindow();
});
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.