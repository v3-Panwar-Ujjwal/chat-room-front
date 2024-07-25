<script setup>
import ChatMessage from "./ChatMessage.vue";
</script>
<template>
  <div class="w-full h-[90%] overflow-y-auto">
    <ChatMessage message="hello" timeStamp="15:19:45" username="Username" />
    <ChatMessage message="Bye" timeStamp="15:19:45" username="Username" />
    <ChatMessage message="Cya" timeStamp="15:19:45" username="Username" />
    <ChatMessage message="hello" timeStamp="15:19:45" username="Username" />
  </div>
</template>
