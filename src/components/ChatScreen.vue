<script setup>
import { onMounted } from "vue";
import TextInput from "./TextInput.vue";
import ChatList from "./ChatList.vue";

function connect() {
  const serverUrl = "ws://localhost:8080";
  const ws = new WebSocket(serverUrl);
  ws.onopen = () => {
    console.log("Connected to server");
  };
  ws.onclose = () => {
    console.log("Connection closed");
  };
}
onMounted(() => {
  connect();
});
</script>
<template>
  <div class="border-2 w-full h-full rounded-lg p-3">
    <ChatList />
    <TextInput />
  </div>
</template>
