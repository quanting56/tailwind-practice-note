<template>
  <div class="perspective-normal">
    <div class="h-[240px] w-[160px] relative transform transform-3d active:rotate-y-180 duration-300 mx-auto">
      <div class="h-full w-full absolute rounded-2xl shadow-xl backface-hidden cursor-pointer bg-[url('src/assets/Kodak_Tmax400_007.jpg')] bg-center bg-cover">
        <p class="text-white mt-1 ml-1">正面</p>
      </div>
      <div class="h-full w-full absolute rounded-2xl shadow-xl backface-hidden rotate-y-180 bg-[url('src/assets/IMG_2073.jpg')] bg-center bg-cover">
        <p class="text-white mt-1 ml-1">背面</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
