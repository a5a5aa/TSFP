<template>
  <q-page>
    <q-sectoin class="banner row">
      <q-img
        src="../../assets/images/brand_top.avif"
        style="max-height:35vh; width:100vw;"
      />
      <div class="bg-mask mask-text col-12 column flex-center">
        <p class="col-2 text-h3">ABOUT US</p>
        <p class="col-2 text-h5">關於我們</p>
      </div>
    </q-sectoin>

    <q-scetion class="section_1 about_secion_1 row flex-center">
    <h5 class="field-title q-mb-xl col-12">－ 品牌故事 OUR STORY －</h5>
      <div class="card1">
        <h4 class="fadeInUp-2 " >一口餘韻飽滿的咖啡香氣</h4>
        <h5 class="fadeInUp-2" >一段與自我對話人的靜思之旅</h5>
        <p class="fadeInUp-3 q-my-lg">MAUNA COFFEE 採用原生種阿拉比卡咖啡豆，新鮮烘焙， 有天然果香、香醇、微酸、無苦澀，回甘，喝完杯底帶有焦糖香氣，滿足您對 MAUNA 的每一分期待。</p>
        <q-img class="zoomIn"
          width="200px"
          src="../../assets/images/alin-luna-lGl3spVIU0g-unsplash.jpg"></q-img>
      </div>
      <div class="card2">
        <q-img
          class="zoomIn"
          width="70%"
          src="../../assets/images/about_2.jpg"></q-img>
      </div>
      <div class="card3">
        <q-img
          class="zoomIn"
          width="100%"
          src="../../assets/images/lecture-room2.jpg"></q-img>
        <p class="fadeInUp-3 q-my-lg">除了門市提供用餐空間，MAUNA 更致力舉辦知識含量豐富的講座活動，活動類型如：心靈成長、生活風格、名人講堂、手作DIY...提供每位喜愛 MAUNA 的朋友更多精進成長的機會。</p>
        <q-btn class="fadeInUp-3" outline rounded to="/products">查看近期講座</q-btn>
      </div>
    </q-scetion>

    <q-section class="section_timeline">
      <div class="q-pa-xl">
        <q-timeline :side="side" :layout="layout" color="accent">

          <q-timeline-entry
            title="初創茶飲事業"
            subtitle="April 10, 2013"
            side="left"
          >
            <div>
              <img style="width:80px" src="../../assets/images/timeline_1.png">
              <br>
              第一家門市在台北中山開幕
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="加入複合式經營"
            subtitle="February 21, 2018"
            side="right"
          >
            <div>
              <img style="width:80px" src="../../assets/images/timeline_2.png">
              <br>
              加入實體講座資源，成功舉辦第一場講座活動
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="發展重心轉移"
            subtitle="May 22, 2020"
            side="left"
          >
            <div>
              <img style="width:80px" src="../../assets/images/timeline_3.png">
              <br>
              因應疫情衝擊門市暫停營業，實體講座活動轉為線上進行，發展重心轉移
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="門市遷址重新開幕"
            subtitle="July 5, 2021"
            side="right"
          >
            <div>
              <img style="width:80px" src="../../assets/images/timeline_1-2.png">
              <br>
              疫情趨緩門市遷址至台北信義重新開幕，並主力於為喜愛獨處族群量身打造舒心自在的靜思空間
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-section>

  <!-- footer -->
  <section class="footer">
    <div class="row justify-between footer_container q-px-xl">
      <div class="footer_map row items-center col-3">
        <div class="row">
          <div class="row col-6">
            <p class="col-12">網站導覽</p>
            <router-link class="col-6" to="/">回首頁</router-link>
            <router-link class="col-6" to="/menu">餐飲介紹</router-link>
            <router-link class="col-6" to="/about">品牌故事</router-link>
            <router-link class="col-6" to="/" >線上MENU</router-link>
            <router-link class="col-6" to="/products">講座活動</router-link>
            <router-link class="col-6" to="/about/location">門市位址</router-link>
            <router-link class="col-6" to="/articles">專欄好文</router-link>
            <router-link to="/myaccount/orders">會員專區</router-link>
          </div>
          <div class="col-6 q-pl-md">
            <p>支援服務</p>
            <router-link to="/myaccount/orders">報名查詢</router-link>
            <router-link to="/service">常見問題</router-link>
            <router-link to="/service/contactus">聯絡我們</router-link>
            <router-link to="/">隱私權政策</router-link>
          </div>
        </div>
      </div>
      <div class="footer_center q-pa-md" style="width: 170px">
        <img style="width:100%" src="../../assets/images/logo/logo_1-1-text.png">
        <div style="width:100%" class="text-center">
          <q-icon name="fa-brands fa-instagram" size="1rem" class="q-mr-sm"></q-icon>
          <q-icon name="fa-brands fa-facebook" size="1rem" class="q-mr-sm"></q-icon>
          <q-icon name="fa-brands fa-twitter" size="1rem"></q-icon>
        </div>
      </div>
      <div class="subscribe column justify-center col-3" style="max-width: 300px;">
        <p>訂閱電子報即時掌握活動消息</p>
        <q-input dense v-model="text" placeholder="your Email" type="email" bg-color="black" color="accent" :input-style="{ color: '#E1BF77' }">
          <template v-slot:prepend>
            <q-icon name="mail" class="q-px-sm"/>
          </template>
          <template v-slot:append>
            <q-icon name="send" class="cursor-pointer q-px-sm" />
          </template>
        </q-input>
      </div>
    </div>
  </section>
  <section class="copyright row flex-center">
    泰山職訓前端網頁專題(僅作學術使用) by SU-YU-ZHEN
  </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import 'animate.css'

const side = ref('right')
const layout = ref('loose')
</script>
