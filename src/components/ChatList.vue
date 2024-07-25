<script setup>
import { computed } from "vue";
import ChatMessage from "./ChatMessage.vue";
import { useWebSocketStore } from "../stores/webSocket.js";

const wsStore = useWebSocketStore();

const messages = computed(() => {
  return wsStore.wsMessages;
});
</script>
<template>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <ChatMessage
          :message="message['message']"
          :timeStamp="message['timeStamp']"
          username="Username"
        />
      </li>
    </ul>
</template>
