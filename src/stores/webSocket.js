import { defineStore } from "pinia";

export const useWebSocketStore = defineStore("websocket", {
  state: () => ({
    websocket: null,
    wsMessages: [],
    wsStatus: "closed", // open, closed, error
    wsError: null,
    clientId: null,
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
        const messageData = JSON.parse(message.data);
        if (messageData.type === "init") {
          this.clientId = messageData.id;
          console.log("clientId is", this.clientId);
        } else {
          this.wsMessages.push(messageData);
        }
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
          clientId: this.clientId,
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

  // Get hours, minutes, seconds
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Format the time string
  const formattedTime = `${formattedHours}:${minutes}:${seconds}:${period}`;

  return formattedTime;
};
