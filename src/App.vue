<template>
  <div class="p-5 font-serif max-w-[1440px] mx-auto">
    <TailwindNoteView></TailwindNoteView>
  </div>
  <HelloWorld></HelloWorld>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue"
import TailwindNoteView from "./views/WebNote/TailwindNoteView.vue";
</script>

<style scoped></style>
