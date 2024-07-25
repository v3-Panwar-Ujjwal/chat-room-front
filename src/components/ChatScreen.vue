<script setup>
import { onMounted } from "vue";
import TextInput from "./TextInput.vue";
import ChatList from "./ChatList.vue";
import ChatCommands from "./ChatCommands.vue";
</script>
<template>
  <div class="border-2 w-full h-full rounded-lg p-3">
    <div class="w-full h-[90%] overflow-y-auto">
      <!-- <ChatCommands /> -->
      <ChatList />
    </div>
    <TextInput />
  </div>
</template>
