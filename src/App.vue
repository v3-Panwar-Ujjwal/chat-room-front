<script setup>
import ChatScreenContainer from "./components/ChatScreenContainer.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <div
    class="h-screen w-screen bg-base flex flex-col justify-center items-center"
  >
    <Header />
    <ChatScreenContainer />
    <Footer />
  </div>
</template>
