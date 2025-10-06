<template>
  <NavBar></NavBar>
  <div class="p-5 font-serif max-w-[1440px] mx-auto">
    <TailwindNoteView></TailwindNoteView>
  </div>
</template>

<script setup>
import NavBar from "./components/Common/NavBar.vue";
import TailwindNoteView from "./views/WebNote/TailwindNoteView.vue";
</script>

<style scoped></style>
