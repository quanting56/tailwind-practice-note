<template>
  <div class="w-full min-h-screen bg-gray-200 flex items-center justify-center">
    <div class="w-[800px] flex flex-col items-center">
      <h1 class="block text-3xl font-bold py-8">點按 登入 跳出登入介面</h1>
      <button
        @click="openModal"
        class="px-10 py-4 bg-blue-500 rounded-md text-white hover:bg-blue-300 active:bg-blue-400 duration-300 cursor-pointer active:ring-2 ring-blue-400 ring-offset-2"
      >
        登入
      </button>
    </div>
  </div>

  <Teleport to="body">
    <div
      v-if="showModal"
      @click.self="closeModal"
      class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900/70 z-[9999]"
    >
      <div class="w-[90%] sm:w-[50%] lg:w-[30%] p-4 bg-white rounded-md shadow-md duration-300">
        <button
          @click="closeModal"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-200 active:text-gray-700 text-5xl font-bold leading-none cursor-pointer"
        >
          &times;
        </button>

        <h2 class="text-center text-purple-600 font-bold mb-10 text-3xl">
          登入您的帳號
        </h2>

        <p class="mb-2">電子信箱</p>
        <input
          v-model="email"
          type="email"
          class="border-2 border-gray-400 focus:ring-2 w-full rounded-md"
        />

        <p class="mt-4 mb-2">密碼</p>
        <input
          v-model="password"
          type="password"
          class="border-2 border-gray-400 focus:ring-2 w-full rounded-md"
        />

        <a
          href="javascript:void(0)"
          class="block mt-2 text-blue-400"
        >
          忘記密碼
        </a>

        <div class="flex gap-3.5">
          <button
            @click="closeModal"
            class="w-full bg-purple-500 hover:bg-purple-700 active:bg-purple-800 active:ring-2 ring-purple-400 ring-offset-2 duration-200 py-3 text-lg text-white tracking-wide rounded-lg mt-4 cursor-pointer"
          >
            取消
          </button>

          <button
            @click="login"
            class="w-full bg-purple-600 hover:bg-purple-800 active:bg-purple-900 active:ring-2 ring-purple-400 ring-offset-2 duration-200 py-3 text-lg text-white tracking-wide rounded-lg mt-4 cursor-pointer"
          >
            登入
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { Teleport, ref, onMounted, onBeforeUnmount } from "vue";

const showModal = ref(false);
const email = ref("");
const password = ref("");

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const login = () => {
  alert(`登入中...\nEmail: ${email.value}\nPassword: ${password.value}`)
  closeModal();
};


// 監聽Esc鍵
const handleKeydown = (e) => {
  if (e.key === "Escape" && showModal.value) {
    closeModal();
  };
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped></style>
