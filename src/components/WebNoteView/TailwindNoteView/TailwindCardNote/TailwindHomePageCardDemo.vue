<template>
  <div class="w-full p-4">
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <li
        v-for="card in cards"
        class="bg-white shadow-lg rounded-3xl overflow-hidden hover:bg-yellow-100 hover:-translate-y-3 duration-300"
      >
        <div class="overflow-hidden">
          <img
            class="hover:scale-125 duration-300"
            :src="card.img" alt="測試卡片圖片1"
          />
        </div>
        <div class="p-4">
          <h2 class="text-purple-500 text-2xl mb-3 tracking-wide">{{ card.title }}</h2>
          <p class="text-gray-500 leading-5 mb-3">{{ card.content }}</p>
          <button
            type="button"
            class="block ml-auto bg-purple-600 text-white text-xl py-2 px-8 rounded-full cursor-pointer hover:bg-purple-800 duration-300"
          >
            click
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// Vite 的批次導入工具（batch import），適合用來載入靜態資源
const images = import.meta.glob("../../../../assets/*", { eager: true, as: "url"});

const cards = [
  {
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nisi culpa nobis molestiae, nesciunt corporis cupiditate commodi maxime modi impedit blanditiis, voluptates, nostrum consequuntur sunt! Perferendis quisquam numquam totam placeat.",
    img: images["../../../../assets/Kodak_Tmax400_007.jpg"]
  },
  {
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nisi culpa nobis molestiae, nesciunt corporis cupiditate commodi maxime modi impedit blanditiis, voluptates, nostrum consequuntur sunt! Perferendis quisquam numquam totam placeat.",
    img: images["../../../../assets/Kodak_Tmax400_007.jpg"]
  },
  {
    title: "Lorem ipsum",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae nisi culpa nobis molestiae, nesciunt corporis cupiditate commodi maxime modi impedit blanditiis, voluptates, nostrum consequuntur sunt! Perferendis quisquam numquam totam placeat.",
    img: images["../../../../assets/Kodak_Tmax400_007.jpg"]
  }
];
</script>

<style scoped></style>
