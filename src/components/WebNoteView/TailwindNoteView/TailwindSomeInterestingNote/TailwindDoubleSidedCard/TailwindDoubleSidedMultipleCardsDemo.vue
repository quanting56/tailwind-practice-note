<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
    <div
      v-for="(card, index) in cards"
      :key="index"
      @mousedown="flipped[index] = true"
      @mouseup="flipped[index] = false"
      @mouseleave="flipped[index] = false"
      @touchstart="flipped[index] = true"
      @touchend="flipped[index] = false"
      class="h-[240px] w-[160px] perspective-normal cursor-pointer mx-auto"
    >
      <div
        class="relative h-full w-full duration-500 transform-3d"
        :class="{ 'rotate-y-180': flipped[index] }"
      >
        <!-- 正面 -->
        <div
          class="absolute h-full w-full rounded-2xl shadow-xl backface-hidden bg-center bg-cover"
          :style="`background-image: url(${card.frontImage})`"
        >
          <p class="text-white mt-1 ml-1">正面</p>
        </div>
        
        <!-- 背面 -->
        <div
          class="absolute h-full w-full rounded-2xl shadow-xl backface-hidden bg-center bg-cover rotate-y-180"
          :style="`background-image: url(${card.backImage})`"
        >
          <p class="text-white mt-1 ml-1">背面</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Vite 的批次導入工具（batch import），適合用來載入靜態資源
const images = import.meta.glob("../../../../../assets/*", { eager: true, as: "url"});

const cards = [
  {
    id: "001",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],
    backImage: images["../../../../../assets/IMG_2073.jpg"]
  },
  {
    id: "002",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],  // 有畫面
    backImage: new URL("../../../../../assets/IMG_2073.jpg", import.meta.url).href
  },
  {
    id: "003",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],  // 有畫面
    backImage: images["../../../../../assets/IMG_2073.jpg"]
  },
  {
    id: "004",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],  // 有畫面
    backImage: images["../../../../../assets/IMG_2073.jpg"]
  },
  {
    id: "005",
    frontImage: images["../../../../../assets/Kodak_Tmax400_007.jpg"],  // 有畫面
    backImage: images["../../../../../assets/IMG_2073.jpg"]
  }
];

const flipped = ref(cards.map(() => false));
</script>

<style scoped></style>
