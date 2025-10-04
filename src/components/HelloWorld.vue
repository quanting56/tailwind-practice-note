<template>
  <pre><code>
  # 新建資料夾專案
  mkdir tailwind-project-name
  cd tailwind-project-name
  
  # 初始化Vite專案 (選Vue + JavaScript/TypeScript依需求)
  npm create vite@latest
  # 選 Vue, 再選 JavaScript 或 TypeScript
  
  # 安裝Tailwind v4 + Vite版本
  npm install tailwindcss @tailwindcss/vite
  
  
  // vite.config.js
  import tailwindcss from "@tailwindcss/vite";  // 增加這一行
  
  export default defineConfig({
    plugins: [
      tailwindcss(),  // 增加這一項
    ],
  })
  
  
  /* src/style.css */
  /* 若有要@import字型之類的內容，要寫在"@import "tailwindcss";"之前 */
  /* @import url("https://..."); */

  @import "tailwindcss";  /* 加入這一行以啟用Tailwind */
  @custom-variant dark (&:where(.dark, .dark *));  /* Tailwind v4要使用dark模式需增加這一行 */
  
  @plugin "@tailwindcss/typography";  /* 視情況決定要不要加入官方套件 */
  @plugin "@tailwindcss/forms";  /* 視情況決定要不要加入官方套件 */
  
  /* 若有需要可自行添加新className */
  .testapply {
    @apply mt-5 text-5xl text-indigo-700 bg-amber-600
  }



  /* 若在Vue SFC的&lt;style&gt;裡面需要用到Tailwind class */
  /* 需先在裡面加上這行 */
  @reference "tailwindcss";
  </code></pre>
</template>

<script setup></script>

<style scoped></style>
