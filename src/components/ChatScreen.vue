<script setup>
import { onMounted, computed } from "vue";
import TextInput from "./TextInput.vue";
import ChatList from "./ChatList.vue";
import ChatCommands from "./ChatCommands.vue";
import { useWebSocketStore } from "../stores/webSocket.js";

const wsStore = useWebSocketStore();

const isMessagesRecieved = computed(() => {
  return wsStore.wsMessages.length === 0;
});
</script>
<template>
  <div class="border-2 w-full h-full rounded-lg p-3">
    <div class="w-full h-[90%] overflow-y-auto">
      <ChatCommands v-if="isMessagesRecieved" />
      <ChatList v-else />
    </div>
    <TextInput />
  </div>
</template>
