import { defineStore } from "pinia";

export const useWebSocketStore = defineStore("websocket", {
  state: () => ({
    websocket: null,
    wsMessage: null,
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
        console.log("Message from server", message.data);
        this.wsMessage = message;
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
        this.websocket.send(message);
      } else {
        console.warn("WebSocket connection is not open. Message not sent");
      }
    },
  },
});
