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
    id: "tailwindCardNote",
    title: "響應式卡片",
    description: null,
    descriptionComponent: null,
    lists: [
      {
        listTitle: "成員式卡片",
        listSubtitle: null,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/TailwindNoteView/TailwindCardNote/TailwindMemberCardDemo.vue")
        ),
        listCode: {
          terminalCode: null,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          vueCode: 
`<template>
  <div class="font-sans p-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2
              sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
  >
    <img
      src="../../../../assets/Kodak_Tmax400_007.jpg"
      alt="成員照片"
      class="block mx-auto h-24 w-24 rounded-full"
    />
    <div class="text-center space-y-2">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">First Card</p>
        <p class="text-gray-500">First content</p>
      </div>
      <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 cursor-pointer
                     hover:text-white hover:bg-purple-600 hover:border-transparent
                     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        click
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>`
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
        listTitle: "文章預覽式卡片",
        listSubtitle: null,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/TailwindNoteView/TailwindCardNote/TailwindArticleCardDemo.vue")
        ),
        listCode: {
          terminalCode: null,
          htmlCode: null,
          cssCode: null,
          jsCode: null,
          vueCode: 
`<template>
  <div class="font-sans max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="h-48 md:h-full w-full md:w-48 object-cover"
          src="../../../../assets/Kodak_Tmax400_007.jpg"
          alt="文章照片"
        />
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          這是標題
        </div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black no-underline hover:underline">這是副標題</a>
        <p class="mt-2 text-gray-500">
          到今天也沒啊啊啊，好看放個。天好時候閱讀的文像然我⋯老師報名大腿，就跟的太太筆記還之類的，想哭拿到真是在他這種，最喜歡的主題購看了四可以：少了方安心了一遇舒服手機。之後我我努力都好好天都⋯大哥的背試看。意是了這些身上一個比較好直接，帽不完反我就很難這種的，來以為有在喜歡超級。上次時的好吃或者，什麼覺得也，很正果就好還，謝大家確定⋯什麼心情不到底有關係是想要家都，停根本是是我覺們家請大家。我覺都沒有，是比當天較子真時候有，太可怕設定年的加上搶文章喜歡你⋯地方給他們，點然後就好，但其會雖然不。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>`
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
      }
    ]
  },
  {
    id: "tailwindOfficialPluginNote",
    title: "官方套件",
    description: "這裡以 Typography 和 Forms 做舉例。",
    descriptionComponent: null,
    lists: [
      {
        listTitle: "Typography 排版套件",
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
            detailTitle: '<code>&lt;div class="prose"&gt; ... &lt;/div&gt;</code></small>',
            detailSubtitle: "樣式僅供參考，實際使用可能略有不同。下方灰框表示 <code>.prose</code> 作用範圍。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/TailwindNoteView/TailwindOfficialPluginNote/TailwindPluginTypographyDemo.vue")
            ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: 
`<template>
  <!-- .prose-wrapper目的在給灰框顯示此SFC作用範圍（其為自訂樣式） */ -->
  <div class="prose-wrapper">
    <article class="prose">
      <h1>Tailwind Typography 範例</h1>
      <p>
        這是一段示範文字，Typography plugin 會自動幫你設定行高、字體大小、段落間距。
      </p>
      <h2>子標題</h2>
      <ul>
        <li>清單項目一</li>
        <li>清單項目二</li>
        <li>清單項目三</li>
      </ul>
      <pre><code>
        &lt;!-- 實際上 code 區域底色會再淺一點 --&gt;
        &lt;script&gt;
          const add(a, b) {
            return a + b;
          };
  
          console.log(add(2 + 3));
        &lt;/script&gt;
      </code></pre>
      <blockquote>
        這是一段引用文字，看起來會有縮排與斜體樣式。
      </blockquote>
    </article>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

/* .prose-wrapper為自訂樣式，目的在給灰框顯示此SFC作用範圍 */
.prose-wrapper {
  @apply border border-gray-300;
}
</style>`
            }
          },
          {
            detailTitle: '<code>&lt;div class="not-prose"&gt; ... &lt;/div&gt;</code></small>',
            detailSubtitle: "<code>.not-prose</code> 是 Typography 官方提供的 className，會讓其內元素不受 <code>.prose</code> 預設樣式影響。",
            detailContent: null,
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: 
`<div class="prose">
  <p>這是正常的 Markdown 內容。</p>
  <p>這裡會套用 Typography 官方提供的樣式。</p>

  <div class="not-prose">
    <YourCardComponent />
    <p>這裡不受 Typography 套件樣式影響。</p>
  </div>
</div>
`,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
      {
        listTitle: "Forms 表單樣式套件",
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
            detailTitle: "一些基本表單元素",
            detailSubtitle: "這個套件不像 Typography，不需額外用在 <code>class</code> 中加上特定 className，只要該專案有使用此套件，即會全域套用。",
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/TailwindNoteView/TailwindOfficialPluginNote/TailwindPluginBasicFormDemo.vue")
            ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: 
`<template>
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

<style scoped></style>`
            }
          },
          {
            detailTitle: "登入頁面",
            detailSubtitle: null,
            detailContent: null,
            detailComponent: defineAsyncComponent(() =>
              import("../../../components/WebNoteView/TailwindNoteView/TailwindOfficialPluginNote/TailwindPluginLoginPageDemo.vue")
            ),
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: 
`<template>
  <form class="space-y-4">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        id="email"
        type="email" 
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm
               focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <input
        id="password"
        type="password"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm
               focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="rounded text-indigo-600 focus:ring-indigo-500" />
        <span class="ml-2">Remember me</span>
      </label>
    </div>
  
    <button
      type="submit" 
      class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
    >
      登入
    </button>
  </form>
</template>

<script setup></script>

<style scoped></style>`
            }
          }
        ]
      }
    ]
  },
  {
    id: "tailwindDarkModeNote",
    title: "Dark Mode",
    description: null,
    descriptionComponent: null,
    lists: [
      {
        listTitle: "一個例子",
        listSubtitle: null,
        listComponent: defineAsyncComponent(() =>
          import("../../../components/WebNoteView/TailwindNoteView/TailwindDarkModeNote/TailwindDarkModeDemo.vue")
        ),
        listCode: {
          terminalCode: null,
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
      }
    ]
  },
  {
    id: "tailwind???Note",
    title: "？？？",
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
          }
        ]
      }
    ]
  }
];