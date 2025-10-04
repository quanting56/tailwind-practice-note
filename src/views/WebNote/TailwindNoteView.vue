<template>
  <div class="max-w-8xl">
    <!-- 整體分欄：左側 Nav, 右側 Content -->
    <div class="flex flex-col gap-5 mb-8 lg:flex-row">
      <!-- 左側分頁列 -->
      <nav class="flex-none basis-[200px] lg:mb-4">
        <ul class="
          list-none p-0 m-0 flex flex-wrap gap-2
          lg:flex-col lg:gap-0
        ">
          <li
            v-for="tab in tabs"
            :key="tab.id"
            :class="[ 
              'p-2.5 cursor-pointer rounded-sm mb-0 px-3 py-2 border border-solid border-[#cccccc] transition-colors lg:border-0 lg:mb-1',
              tab.id === activeTab
                ? 'bg-[#ffc107] text-gray-700'
                : 'hover:bg-gray-200'
            ]"
            @click="activeTab = tab.id"
          >
            {{ tab.title }}
          </li>
        </ul>
      </nav>

      <!-- 右側內容區 -->
      <transition
        name="fade"
        mode="out-in"
        @after-enter="handleHighlight"
      >
        <section v-if="currentTab" :key="currentTab.id" class="prose prose-custom">
          <h3 class="text-2xl mt-0 mb-2">{{ currentTab.title }}</h3>
          <hr />

          <!-- 總說明 -->
          <div
            v-if="currentTab.description"
            v-html="currentTab.description"
            class="mb-9"
          ></div>
          <div
            v-if="currentTab.descriptionComponent"
          >
            <component :is="currentTab.descriptionComponent"></component>
          </div>

          <!-- 大項說明 -->
          <ul
            v-if="currentTab.lists.length && currentTab.lists[0].listTitle"
          >
            <li
              v-for="list in currentTab.lists"
              :key="list.listTitle"
              class="mb-15"
            >
              <h4 class="text-[22px]" v-html="list.listTitle"></h4>
              <div
                v-if="list.listSubtitle"
                v-html="list.listSubtitle"
                class="mb-7"
              ></div>

              <!-- 匯入大項元件 -->
              <div v-if="list.listComponent" class="p-4 mb-2">
                <component :is="list.listComponent"></component>
              </div>

              <!-- 大項程式碼 -->
              <div
                v-if="list.listCode.terminalCode || list.listCode.htmlCode || list.listCode.jsCode || list.listCode.vueCode"
                class="code"
              >
                <template v-if="list.listCode.terminalCode">
                  <!-- terminal code: -->
                  <pre><code class="language-bash">{{ list.listCode.terminalCode }}</code></pre>
                </template>

                <template v-if="list.listCode.htmlCode">
                  <!-- html code: -->
                  <pre><code class="html">{{ list.listCode.htmlCode }}</code></pre>
                </template>

                <template v-if="list.listCode.jsCode">
                  <!-- javascript code: -->
                  <pre><code class="javascript">{{ list.listCode.jsCode }}</code></pre>
                </template>

                <template v-if="list.listCode.vueSFCCode">
                  Vue 3 SFC（使用Composition API）這樣寫：
                  <pre><code class="html">{{ list.listCode.vueSFCCode }}</code></pre>
                </template>
              </div>


              <!-- 小項說明 -->
              <ol v-if="list.listDetails.length && list.listDetails[0].detailTitle">
                <li
                  v-for="detail in list.listDetails"
                  :key="detail.detailTitle"
                  class="mb-7"
                >
                  <h5 v-html="detail.detailTitle" class="font-medium"></h5>
                  <div
                    v-if="detail.detailSubtitle"
                    v-html="detail.detailSubtitle"
                    class="
                      before:content-['-'] before:mr-1
                      text-gray-800/75 text-xs italic mb-2 [&_code]:not-italic
                    "
                  ></div>
                  <div
                    v-if="detail.detailContent"
                    v-html="detail.detailContent"
                    class="mt-4 leading-4"
                  ></div>

                  <!-- 匯入小項元件 -->
                  <div v-if="detail.detailComponent" class="p-4 mb-2">
                    <component :is="detail.detailComponent"></component>
                  </div>

                  <!-- 小項程式碼 -->
                  <div
                    v-if="detail.detailCode.terminalCode || detail.detailCode.htmlCode || detail.detailCode.jsCode || detail.detailCode.vueCode"
                    class="code"
                  >
                    <template v-if="detail.detailCode.terminalCode">
                      <!-- terminal code: -->
                      <pre><code class="language-bash">{{ detail.detailCode.terminalCode }}</code></pre>
                    </template>

                    <template v-if="detail.detailCode.htmlCode">
                      <!-- html code: -->
                      <pre><code class="html">{{ detail.detailCode.htmlCode }}</code></pre>
                    </template>

                    <template v-if="detail.detailCode.jsCode">
                      <!-- javascript code: -->
                      <pre><code class="javascript">{{ detail.detailCode.jsCode }}</code></pre>
                    </template>

                    <template v-if="detail.detailCode.vueSFCCode">
                      Vue 3 SFC（使用Composition API）這樣寫：
                      <pre><code class="html">{{ detail.detailCode.vueSFCCode }}</code></pre>
                    </template>
                  </div>
                </li>
              </ol>
            </li>
          </ul>
        </section>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, nextTick } from "vue";

// import 資料進來渲染
import { tailwindNoteViewTabs } from "../../data/web-note-view/tailwind-note-view/tailwind-note-tabs";
const tabs = tailwindNoteViewTabs;

// 處理 tab 切換
const activeTab = ref(tabs[0].id);
const currentTab = computed(() => {
  return tabs.find(t => t.id === activeTab.value) || tabs[0];
});


// 預先 import Highlight.js
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import bash from "highlight.js/lib/languages/bash";
import "highlight.js/styles/vs2015.css";
hljs.registerLanguage("html", html);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("bash", bash);

// 每次切換後重新 highlight
onMounted(() => {
  nextTick(() => hljs.highlightAll());
});

function handleHighlight() {
  nextTick(() => {
    // 清除所有<code>上的data-highlighted屬性標記
    document.querySelectorAll("pre code").forEach(el => {
      delete el.dataset.highlighted;
    });

    // 重新高亮
    hljs.highlightAll();
  });
};
</script>

<style scoped>
@reference "tailwindcss";

/* 右側 Content */
/* 淡入淡出動畫：fade */
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-[0.12s] ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  @apply opacity-0;
}

/* 表格樣式 */
::v-deep(table) {
  @apply border border-solid border-gray-500 border-collapse
}

::v-deep(th),
::v-deep(td) {
  @apply border border-solid border-gray-500 p-1
}
</style>
