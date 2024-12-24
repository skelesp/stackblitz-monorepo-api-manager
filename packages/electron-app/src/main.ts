import { app, BrowserWindow, ipcMain } from 'electron';
import { AppApiRegistry, validChannels } from '@monorepo/shared';
import { handlers } from './handlers';
import path from 'path';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL('http://localhost:4200');
}

app.whenReady().then(() => {
  // Register IPC handlers with type checking
  Object.keys(validChannels).forEach((channel) => {
    const typedChannel = channel as keyof AppApiRegistry;
    ipcMain.handle(channel, (_, input) => handlers[typedChannel](input));
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});