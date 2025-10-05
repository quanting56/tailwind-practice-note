<template>
  <nav
    ref="navRef"
    role="navigation"
    aria-label="主選單"
    class="flex flex-wrap items-center bg-[#333333] sticky top-0 z-[999] opacity-90 px-3 py-2 gap-3"
  >
    <!-- Logo + Title -->
    <a
      href="https://quanting56.github.io/Antinant-vue/"
      class="flex items-center gap-2 no-underline"
    >
      <img :src="brandImg" class="w-[30px] h-[30px] rounded-full" alt="品牌" />
      <span class="text-gray-200 text-xl hover:text-white"> 阿蛤ㄉ窩</span>
    </a>

    <!-- Hamburger Button (手機用) -->
    <button
      type="button"
      @click="menuOpen = !menuOpen"
      :aria-expanded="menuOpen"
      aria-label="切換選單"
      class="bg-transparent border-none p-1.5 cursor-pointer focus:outline-2 focus:outline-gray-400 block ml-auto md:hidden md:ml-0"
    >
      <span
        :class="[
          'block w-[25px] h-[3px] bg-gray-300 rounded-xs transition-all duration-300 ease-in-out',
          menuOpen ? 'translate-y-2 rotate-45' : ''
        ]"
      ></span>
      <span
        :class="[
          'block w-[25px] h-[3px] bg-gray-300 rounded-xs transition-all duration-300 ease-in-out my-[5px]',
          menuOpen ? 'opacity-0 transform scale-x-0' : ''
        ]"
      ></span>
      <span
        :class="[
          'block w-[25px] h-[3px] bg-gray-300 rounded-xs transition-all duration-300 ease-in-out',
          menuOpen ? '-translate-y-2 -rotate-45' : ''
        ]"
      ></span>
    </button>

    <!-- Main Nav -->
    <ul
      :class="[
        'list-none flex-col bg-[#333333] absolute top-full right-3 m-0 p-2.5 border border-gray-800 w-[calc(100%-24px)] box-border gap-2 items-center',
        'md:flex md:flex-row md:static md:border-none md:w-auto md:p-0 md:pl-2',
        menuOpen ? 'flex' : 'hidden'
      ]"
    >
      <li
        v-for="(item, index) in navItems"
        :key="item.id"
        @mouseleave="handleMouseLeave(item)"
        class="relative"
      >
        <!-- 單一連結（沒有 children） -->
        <router-link
          v-if="!item.children"
          :to="item.to"
          class="block text-white/55 px-2.5 py-1.5 no-underline cursor-pointer transition-colors duration-500 hover:bg-[#555555] hover:text-white/95"
        >
          {{ item.title }}
        </router-link>

        <!-- Dropdown -->
        <div v-else>
          <div
            role="button"
            tabindex="0"
            @click="toggleDropdown(item)"
            @keydown.enter.prevent="toggleDropdown(item)"
            @keydown.space.prevent="toggleDropdown(item)"
            :aria-expanded="!!item.open"
            :aria-haspopup="true"
            class="block text-white/55 px-2.5 py-1.5 no-underline cursor-pointer transition-colors duration-500 hover:bg-[#555555] hover:text-white/95 after:content-['▼'] after:ml-1 after:text-[10px] after:opacity-85"
          >
            {{ item.title }}
          </div>

          <ul
            v-show="item.open"
            role="menu"
            class="mx-0 my-1.5 md:absolute md:top-[82%] md:-left-px pl-0 min-w-44 bg-[#444444] md:border md:border-[#222222] z-[1000] list-none"
          >
            <template v-for="(child, ci) in item.children" :key="`${item.id}-child-${ci}`">
              <li
                v-if="child.divider"
                role="separator"
                class="h-px bg-gray-500 mx-0 my-1"
              ></li>  <!-- 分隔線 -->

              <li
                v-else-if="child.header"
                role="presentation"
                class="block px-3 py-1.5 text-[#d0d0d0] text-xs no-underline text-left whitespace-nowrap"
              >
                {{ child.header }}
              </li>

              <li v-else role="menuitem">
                <!-- 以 '/' 開頭視為內部路由 (可依需求調整判斷條件) -->
                <router-link
                  v-if="child.href && child.href.startsWith('/')"
                  :to="child.href"
                  :target="child.target || '_self'"
                  class="block px-3 py-2 text-white no-underline text-left whitespace-nowrap hover:bg-[#666666]"
                >
                  {{ child.label }}
                </router-link>

                <a
                  v-else
                  :href="child.href"
                  :target="child.target || '_self'"
                  class="block px-3 py-2 text-white no-underline text-left whitespace-nowrap hover:bg-[#666666]"
                >
                  {{ child.label }}
                </a>
              </li>
            </template>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import brandImg from "../../assets/IMG_2073.jpg"; // 用相對路徑 import logo

// UI state
const menuOpen = ref(false);
const navRef = ref(null);

// 依螢幕尺寸判斷 desktop / mobile（可根據你的斷點微調）
const isDesktop = ref(window.innerWidth > 992);
const handleResize = () => {
  isDesktop.value = window.innerWidth > 992;
  if (isDesktop.value === true) {
    // 手機切換到桌機時確保主選單顯示正常（關閉 hamburger 隱藏狀態）
    menuOpen.value = false;
  }
};

// 幫 navItems 每個 item 指定唯一 id，並確保 children item 有 open 屬性
const rawItems = [  // 預留，若有需要使用NavBar，需先設定Vue-router，不然<router-link>可能會報錯
  // { title: '關於我', to: '/about-me' },
  // {
  //   title: '一些文章',
  //   children: [
  //     { label: '攝影', href: '/photo-portfolio' },
  //     { label: '公路', href: 'road.html' },
  //     { label: '學習', href: 'study.html' },
  //     { label: '投資', href: 'investment.html' }
  //   ]
  // }
];

// 產生 navItems（帶 id 與 open）
const navItems = ref(
  rawItems.map((it, i) => {
    const item = { ...it, id: `nav-item-${i}` };
    if (item.children) item.open = false; // 明確初始化 open 屬性（reactive）
    return item;
  })
);

// Toggle dropdown (desktop: close others; mobile: 不強制關閉其他)
const toggleDropdown = (item) => {
  if (!item.children) return;
  if (isDesktop.value) {
    // 桌機行為：展開同時收合其他 siblings
    navItems.value.forEach((it) => {
      if (it.id !== item.id && it.children) it.open = false;
    });
    item.open = !item.open;
  } else {
    // 手機：切換該項就好（你也可以改成只允許單一展開）
    item.open = !item.open;
  }
};

// 明確關閉單一 dropdown
const closeDropdown = (item) => {
  if (item && item.children) item.open = false;
};

// mouseleave handler 只在 desktop 有效果
const handleMouseLeave = (item) => {
  if (isDesktop.value) closeDropdown(item);
};

// 關閉所有 dropdown
const closeAllDropdowns = () => {
  navItems.value.forEach((it) => {
    if (it.children) it.open = false;
  });
  menuOpen.value = false;
};

// 點擊外部關閉（點在 nav 外面時）
const handleDocClick = (e) => {
  const navEl = navRef.value;
  if (!navEl) return;
  if (!navEl.contains(e.target)) {
    closeAllDropdowns();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  document.addEventListener('click', handleDocClick);
  // 初始判斷
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.removeEventListener('click', handleDocClick);
});
</script>

<style scoped></style>
