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
@custom-variant dark (&:where(.dark, .dark *));  /* 要啟用Tailwind v4 dark樣式的class模式需增加這一行，否則會是media模式（依瀏覽器決定是否啟用dark樣式） */

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
    description: "Tailwind v4 啟用 Dark Mode 有一些步驟要做，接著就可以用 <code>dark:</code> 的 className 來開發深色模式了！",
    descriptionComponent: null,
    lists: [
      {
        listTitle: "環境設定",
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
`@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));  /* 要啟用Tailwind v4 dark樣式的class模式需增加這一行，否則會是media模式（依瀏覽器決定是否啟用dark樣式） */

@plugin " ... ";

@layer base { ... }
@layer components { ... }
@layer utilities { ... }`,
              jsCode: null,
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
`// Tailwind v4 不需要由 tailwind.config.js 設定 darkMode 是 "media" 還是 "class"
// 當 src/style.css 中有 "@custom-variant dark dark (&:where(.dark, .dark *));" 就會是 class 模式
// 反之，則會是 media 模式（依瀏覽器決定是否開啟 dark 樣式）`,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>class</code> 模式",
            detailSubtitle: null,
            detailContent: '當父元素（通常會用 JavaScript 直接變更在 <code>&lt;html&gt;</code> 的 className 上，直接全域變更）<code>class="dark"</code> 時，子元素就會採用 dark 樣式。',
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: 
`<!-- 子元件會使用 dark 樣式 -->
<div class="dark">
  <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
    ...
  </div>
</div>


<!-- 子元件不會使用 dark 樣式 -->
<div>
  <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
    ...
  </div>
</div>`,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "<code>media</code> 模式",
            detailSubtitle: null,
            detailContent: "是否啟用 dark 樣式，依瀏覽器設定的外觀模式決定。",
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: null,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          },
          {
            detailTitle: "目標 .html",
            detailSubtitle: null,
            detailContent: "Tailwind 不會自動生成 dark 模式的配色，開發者需要自己用 className 指定 dark 模式下的樣式。",
            detailComponent: null,
            detailCode: {
              terminalCode: null,
              htmlCode: 
`<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  ...
</div>`,
              cssCode: null,
              jsCode: null,
              vueCode: null
            }
          }
        ]
      },
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
          vueCode: 
`<template>
  <article class="mx-auto px-8 py-3 my-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
    <h1 class="text-6xl block text-center mt-5 tracking-wider font-bold text-gray-900 dark:text-yellow-500">
      Dark Mode Test
    </h1>

    <div class="flex justify-center mt-5">
      <button
        @click="setLightMode"
        class="
          px-4 py-2 rounded-full bg-white border-gray-400 border-2 cursor-pointer
          hover:bg-gray-100 active:ring-2 active:ring-offset-1 active:ring-yellow-500
        "
      >
        日間模式
        <font-awesome-icon icon="sun" class="text-yellow-500" />
      </button>
      
      <button
        @click="setDarkMode"
        class="
          px-4 py-2 rounded-full bg-gray-700 border-gray-400 border-2 text-white cursor-pointer
          hover:bg-gray-800 active:ring-2 active:ring-offset-1 active:ring-yellow-500
        "
      >
        夜間模式
        <font-awesome-icon icon="moon" class="text-yellow-500" />
      </button>
    </div>

    <p class="mt-5 leading-relaxed dark:text-yellow-500">兄石還手再，陽占由細婆夕米卜母秋停？世知抓請片南央信魚看哭具着牠屋朋斗珠唱朵。來真目中音房員布兩蝴澡天或送象收借品語從，拉雲地這！隻寸下。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">師遠人浪反平知走英空請光，朋會告品校右尾共那冒收冒陽百筆幫明想林！告怕請安現們人春工細三升哪。戊遠圓有就就晚又包月筆青來；坐着哪，久念者找白吃怕主浪知。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">路物得是乾刀胡背雄抄玩停哪丟乾米千。乾坡飯假比申今念，別葉遠浪房蝴孝音几什，止斥升寫夕貓加幸：園步師毛童讀村根法飛但娘八哭戶。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">乙由合內央士是音錯工美頭乍節。節寺京火由友字刃娘請言耍星吹實子坡吧魚昔。月蝸原反久功亮行，和們河！方叫房光夏送玉。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">到個原她裏杯午從年紅五水往想位言平至苗人。冬林幼父能員說波但入文至沒抄步兌聲笑羊！師亮甲，愛香原早第美水丁學固向洋寫色。采看母告夏休幫麻都喝主跑院東干爬飯。羊鳥男視者祖千物時禾禾和工五她草夕才。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">科春交活干會大竹蝴者清！爸物彩至聽你相兒片結字幾杯幫洋呀干邊，京卜示呢外住采息同他千弟：松珠壯嗎共園比。來快半晚因黃怪幸中止前植兄飛幸美十千母旦送。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">足汗包呀已服。或裏百中許光出六米信院害姊辛它止子，做抓草亭員好聲自光面是乞幾。風目姊實南回口神後可天化害別學青民良怕！不重陽。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">課雨英收第來放九他今草問放勿目不久心邊，美他那圓第間往視院向寸別尾玩安昔，往王斥助；假四發能祖第草。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">秋登右昌菜害哭爪哭家汗丁，哪夏多巾友欠犬鳥左有日自「汁兒半內語扒欠辛」聲朵找苗能良即亭知北經呢字一造過入；九波每久里裝八用寸好息一燈叫扒彩次知寸到：的夏裏昌。巾室結都。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">古乞跳麻大合小和抄兒呢只做走主知住去牠工。青松買花來帽胡抱比犬色行浪良民。但爪重物背牙加片！扒皮貝石足星圓都家。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">夕蛋司明飯日園怕視升尺衣蛋比多示和平，西大住樹長美天干友候時言圓欠跳土古反教歡，服青很乍爸友共在草聽：百着但旦首昔吧少昔身來帽目隻食；實故到房由話，詞交枝別。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">生葉真浪弟兄鳥住耳時：忍每鴨追耳新出子而媽乍葉好後次候，節蝴朵嗎朋文干風游科讀做跳澡找女魚兒園向！娘嗎男實弓像水手月苦就話歌：公叫字您有別拉什。來斗字士們封帽，吹毛清乾犬「的火發少晚」。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">錯還前還假丟直浪條遠真喜圓兒？過母呀衣請汁呀內入來羊拍胡進蝴樹古音尾在。共雄定種飛她登還您；父山道黑說未自找穴古身力意們，嗎民牛少，買哪事干彩荷常清發加兒麼雪候對：戊送歌，內因活穿。</p>
    <p class="mt-5 leading-relaxed dark:text-yellow-500">尺胡良動喜青竹笑士反申我每成出和片具和訴。十年從天清頭王枝直到朱南錯，連九力流得裏爸實那世人重。</p>
  </article>
</template>

<script setup>
const setLightMode = () => {
  document.documentElement.classList.remove("dark");
};

const setDarkMode = () => {
  document.documentElement.classList.add("dark");
};
</script>

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
    id: "tailwindBulletinBoardNote",
    title: "佈告欄",
    description: null,
    descriptionComponent: null,
    lists: [
      {
        listTitle: "留言板",
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