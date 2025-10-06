<template>
  <!-- 目前卡在這個SFC的樣式會被全域.prose-custom影響 -->
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
      &lt;script&gt;
        const add(a, b) {
          return a + b;
        };

        console.log(add(2 + 3));
      &lt;/script&gt;
    </code></pre>
    <blockquote>
      這是一段引用文字，看起來會有縮排與淡色樣式。
    </blockquote>
  </article>
</template>

<script setup></script>

<style scoped></style>
