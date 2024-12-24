import { AppApiRegistry } from './endpoints';

export interface ElectronAPI {
  invoke<TChannel extends keyof AppApiRegistry>(
    channel: TChannel,
    data: AppApiRegistry[TChannel]['input']
  ): Promise<AppApiRegistry[TChannel]['output']>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}