import { defineStore } from "pinia";

export const useWebSocketStore = defineStore("websocket", {
  state: () => ({
    websocket: null,
    wsMessages: [],
    wsStatus: "closed", // open, closed, error
    wsError: null,
  }),
  actions: {
    initWebSocket() {
      this.websocket = new WebSocket("ws://localhost:8080/");

      this.websocket.onopen = () => {
        console.log("WebSocket connection open");
        this.wsStatus = "open";
      };

      this.websocket.onmessage = (message) => {
        // console.log("Message from server", message);
        this.wsMessages.push(JSON.parse(message.data));
      };

      this.websocket.onclose = () => {
        console.log("WebSocket connection close");
        this.wsStatus = "closed";
      };

      this.websocket.onerror = (error) => {
        console.error("Websocket error:", error);
        this.wsError = error;
      };
    },
    sendMessage(message) {
      if (this.websocket && this.wsStatus === "open") {
        const messageData = {
          timeStamp: getTimeNow(),
          message: message,
        };
        console.log("Message sent is", messageData);
        this.websocket.send(JSON.stringify(messageData));
      } else {
        console.warn("WebSocket connection is not open. Message not sent");
      }
    },
  },
});

const getTimeNow = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  // const seconds = now.getSeconds();

  return `${hours}:${minutes}`;
};
