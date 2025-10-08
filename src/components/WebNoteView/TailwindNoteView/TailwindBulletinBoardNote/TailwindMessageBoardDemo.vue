<template>
  <div class="w-full min-h-screen bg-gray-200 flex items-center justify-center">
    <div class="w-[800px]">
      <h1 class="block text-3xl font-bold py-8">寫一個留言版型</h1>
      <div class="w-full flex justify-center items-center">
        <img
          class="w-14 h-14 mr-4 rounded-full"
          src="../../../../assets/Kodak_Tmax400_007.jpg" alt="圖片"
        />
        <input
          class="w-[600px] p-4 rounded-md mr-3"
          type="text" placeholder="請留言"
        />
        <button class="px-10 py-4 bg-blue-500 rounded-md text-white hover:bg-blue-300 duration-300 cursor-pointer">
          發佈
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
