const { app, BrowserWindow } = require("electron");
const path = require("path");

const url = require("url");

let mainWindow;

app.on("window-all-closed", () => {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 250,
    height: 400,
    icon: __dirname + "/img/CalcIcon.ico",
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavascript: true,
      allowRunningInsecureContent: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
