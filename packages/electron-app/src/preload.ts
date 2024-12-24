import { contextBridge, ipcRenderer } from 'electron';
import { AppApiRegistry, ElectronAPI, isValidChannel } from '@monorepo/shared';

// Type-safe wrapper for IPC communication
const api: ElectronAPI = {
  invoke: async <TChannel extends keyof AppApiRegistry>(
    channel: TChannel,
    data: AppApiRegistry[TChannel]['input']
  ): Promise<AppApiRegistry[TChannel]['output']> => {
    if (!isValidChannel(channel)) {
      throw new Error(`Invalid channel: ${channel}`);
    }
    return ipcRenderer.invoke(channel, data);
  }
};

// Expose the API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', api);