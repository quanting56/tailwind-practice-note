import { defineAsyncComponent } from "vue";

export const tailwindNoteViewTabs = [
  {
    id: "tailwindStartNote",
    title: "開始使用",
    description: "本段以 <u>Tailwind CSS v4</u> + <u>Vite</u> 作舉例，每個版本的 Tailwind CSS 在不同環境部署略有不同。",
    descriptionComponent: null,
    lists: [
      {
        listTitle: "終端機的部分",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: 
`# 新建資料夾專案
mkdir tailwind-project-name
cd tailwind-project-name

# 初始化Vite專案 (選Vue + JavaScript/TypeScript依需求)
npm create vite@latest
# 選 Vue, 再選 JavaScript 或 TypeScript

# 安裝Tailwind v4 + Vite版本
npm install tailwindcss @tailwindcss/vite`,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "JavaScript 的部分",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: null,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "vite.config.js",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: 
`import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";  // 增加這一行

export default defineConfig({
  plugins: [
    tailwindcss()  // 增加這一行
  ],
  base: "/tailwind-practice-note/"
});`,
              vueCode: null
            }
          },
          {
            detailTitle: "tailwind.config.js",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: 
`// Tailwind v4 不需要手動設定 tailwind.config.js
// 此 .js 檔僅是讓 VS code 認得此專案為 Tailwind 專案
// 進而提供 Tailwind className 的自動補全功能`,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "CSS 的部分",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: null,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "src/style.css",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: 
`/* 若有要@import字型之類的內容，要寫在"@import "tailwindcss";"之前 */
/* @import url("https://..."); */

@import "tailwindcss";  /* 加入這一行以啟用Tailwind */
@custom-variant dark (&:where(.dark, .dark *));  /* Tailwind v4要使用dark模式需增加這一行 */

/* 視情況決定要不要加入官方套件 */
@plugin "@tailwindcss/typography";  /* 文章排版用，提供".prose"相關樣式 */
@plugin "@tailwindcss/forms";  /* 提供表單元素基本外觀（如input、select、checkbox） */


/* Tailwind的三層結構，可於此處擴充自訂樣式 */
/* base層，用來覆蓋或補充全域基礎樣式 */
@layer base {
  body {
    @apply bg-[#ffffafa] p-0 m-0;
    font-family: Arial, Helvetica, sans-serif;
  }
}

/* 元件層，通常拿來放自訂元件 */
@layer components {
  .testapply {  
    @apply mt-5 text-5xl text-indigo-700 bg-amber-600;
  }
}

/* 工具層，通常放自訂的細部樣式，用來補充Tailwind沒有提供的工具 */
@layer utilities {
  .text-noonsun {
    color: rgb(255, 255, 251);
}`,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "Vue SFC 的部分",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: null,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "若在 Vue SFC 的 <code>&lt;style&gt;</code> 裡面需要用到 Tailwind class",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: 
`<template> ... </template>
<script setup></script>

<style scoped>
/* 若在Vue SFC的<style>裡面需要用到Tailwind class */
/* 需先在裡面加上這行 */
@reference "tailwindcss";


/* 例如使用到Vue的<transition>動畫（此處以fade為例） */
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-[0.12s] ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  @apply opacity-0;
}


/* 例如使用"::v-deep()"穿透影響子元件樣式 */
::v-deep(table) {
  @apply border border-solid border-gray-500 border-collapse
}
::v-deep(th),
::v-deep(td) {
  @apply border border-solid border-gray-500 p-1
}
</style>`
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsCardNote",
    title: "一些卡片",
    description: null,
    descriptionComponent: null,
    lists: [
      {
        listTitle: "小工具們",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: null,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "ToDo List",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/ToDoApp.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "複利計算器",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/CompoundInterestCalculator/CompoundInterestCalculator.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  },
  {
    id: "vuejsSomeInterestingNote",
    title: "一些卡片",
    description: null,
    descriptionComponent: null,
    lists: [
      {
        listTitle: "小工具們",
        listSubtitle: null,
        listComponent: null,
        listCode: {
          terminalCode: null,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          vueCode: null
        },
        listDetails: [
          {
            detailTitle: "ToDo List",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/ToDoApp.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "複利計算器",
            detailSubtitle: null,
            detailContent: null,
            // detailComponent: defineAsyncComponent(() =>
            //   import("../../../components/WebNoteView/VuejsNoteView/VuejsSomeInterestingNote/CompoundInterestCalculator/CompoundInterestCalculator.vue")
            // ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      }
    ]
  }
];