<template>
  <form>
    <div class="ml-5 sm:w-96">
      <label class="block mb-3">
        <input type="text" class="w-full rounded-md" placeholder="請輸入姓名" />
      </label>

      <label class="block mb-3">
        <input type="checkbox" />
        <span class="pl-2">複選題</span>
      </label>

      <label class="block mb-3">
        <input type="radio" />
        <span class="pl-2">單選題</span>
      </label>

      <label class="block mb-3">
        <input type="date" class="w-full rounded-md" />
      </label>

      <label class="block mb-3">
        <input type="email" class="w-full rounded-md" placeholder="name@email.com" />
      </label>

      <label class="block mb-3">
        <select class="w-full rounded-md">
          <option value="">-- 請選擇 --</option>
          <option value="1">-- 項目一 --</option>
          <option value="2">-- 項目二 --</option>
        </select>
      </label>

      <label class="block">
        <textarea cols="30" rows="10" class="w-full rounded-md" placeholder="在想些什麼..."></textarea>
      </label>
    </div>
  </form>
</template>

<script setup></script>

<style scoped></style>
