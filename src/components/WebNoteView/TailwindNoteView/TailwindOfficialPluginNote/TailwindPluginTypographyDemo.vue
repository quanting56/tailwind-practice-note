<template>
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

/* 以下是模擬顯示.prose用（由於父元件有使用.not-prose，故在此手動模擬顯示.prose樣式 */
.prose {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #111827; /* text-gray-900 */
  line-height: 1.75;
  font-size: 1rem;
  max-width: 65ch;
  margin: 2rem auto;
}

.prose h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.prose h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-top: 1.25em;
  margin-bottom: 0.5em;
}

.prose p {
  margin-top: 1em;
  margin-bottom: 1em;
  color: #374151; /* text-gray-700 */
}

.prose ul {
  margin-top: 1em;
  margin-bottom: 1em;
  padding-left: 1.5em;
  list-style-type: disc;
}

.prose li {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
}

.prose blockquote {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  border-left: 0.25rem solid #e5e7eb; /* border-gray-200 */
  padding-left: 1em;
  color: #6b7280; /* text-gray-500 */
  font-style: italic;
}

.prose code {
  background-color: #f3f4f6; /* bg-gray-100 */
  color: #db2777; /* pink-600 */
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 0.9em;
}

.prose pre {
  background-color: #1f2937; /* gray-800 */
  color: #f9fafb; /* gray-50 */
  padding: 1em;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  font-size: 0.9em;
  line-height: 1.5;
}

.prose pre code {
  background: none;
  color: inherit;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}

.prose a {
  color: #2563eb; /* blue-600 */
  text-decoration: underline;
}

.prose a:hover {
  color: #1d4ed8; /* blue-700 */
}
</style>
