<script setup>
import ChevronRightIcon from "../assets/ChevronRightIcon.vue";
const props = defineProps({
  message: String,
  username: String,
  timeStamp: String,
});
</script>
<template>
  <div class="w-full flex">
    <div class="stroke-lavender text-lavender">
      <ChevronRightIcon />
    </div>
    <div class="flex flex-col w-full">
      <div class="flex justify-between">
        <div class="text-[#89b4fa]">{{ props.username }}</div>
        <div class="text-gray-200">{{ props.timeStamp }}</div>
      </div>
      <div class="text-[#cdd6f4]">{{ props.message }}</div>
    </div>
  </div>
</template>
