<script setup>
import { onMounted, ref } from "vue";
import SendIcon from "../assets/SendIcon.vue";
import ArrowRightIcon from "../assets/ArrowRightIcon.vue";
import { useWebSocketStore } from "../stores/webSocket.js";

const wsStore = useWebSocketStore();
const message = ref("");

const send = () => {
  wsStore.sendMessage(message.value);
  message.value = ""; // Clear the input after sending
};
</script>
<template>
  <div class="h-[10%] flex gap-x-4">
    <textarea
      v-model="message"
      maxlength="250"
      class="resize-none focus:outline-none grow border-2 border-gray-50 bg-transparent rounded-lg p-2 text-gray-200"
    ></textarea>
    <div class="h-full flex justify-center items-center">
      <div
        class="bg-gray-50 rounded-full h-fit p-2 hover:cursor-pointer"
        @click="send"
      >
        <ArrowRightIcon class="stroke-lavender text-lavender" />
      </div>
    </div>
  </div>
</template>
