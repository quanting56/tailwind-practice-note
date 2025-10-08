<template>
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

<style scoped></style>
