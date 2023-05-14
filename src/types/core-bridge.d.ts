declare namespace CoreBridge {
  function postMessage(message: string): void;
}

declare global {
  interface Window {
    webkit: {
      messageHandlers: {
        CoreBridge: {
          postMessage: (message: string) => void;
        };
      };
    };
  }
}
