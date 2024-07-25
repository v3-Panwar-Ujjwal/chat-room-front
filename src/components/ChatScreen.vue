<script setup>
import { onMounted } from "vue";
import TextInput from "./TextInput.vue";
import ChatList from "./ChatList.vue";

</script>
<template>
  <div class="border-2 w-full h-full rounded-lg p-3">
    <ChatList />
    <TextInput />
  </div>
</template>
