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
  <div class="w-full h-[90%] overflow-y-auto">
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <ChatMessage
          :message="message"
          timeStamp="15:19:45"
          username="Username"
        />
      </li>
    </ul>
  </div>
</template>
