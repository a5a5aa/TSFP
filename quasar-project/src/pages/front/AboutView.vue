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
    <h5 class="field-title q-mb-xl col-12">品牌故事 OUR STORY</h5>
      <div class="card1">
        <h4>我是標題1我是標題1</h4>
        <h5>我是標題1我是標題1我是標題1</h5>
        <p class="q-my-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum cupiditate nihil ea totam labore, aut fuga facilis rerum ducimus.</p>
        <q-img
          width="200px"
          src="../../assets/images/about_1.jpg"></q-img>
      </div>
      <div class="card2">
        <q-img
          width="70%"
          src="../../assets/images/about_3.jpg"></q-img>
      </div>
      <div class="card3">
        <q-img
          width="100%"
          src="../../assets/images/about_2.jpg"></q-img>
        <p class="q-my-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque quidem nesciunt optio laboriosam doloribus earum quam eaque quasi tenetur.</p>
        <q-btn outline rounded to="/products">查看近期講座</q-btn>
      </div>
    </q-scetion>

    <q-section class="section_timeline">
      <div class="q-pa-xl">
        <q-timeline :side="side" :layout="layout" color="accent">

          <q-timeline-entry
            title="初創茶飲事業"
            subtitle="February 22, 2013"
            side="left"
          >
            <div>
              <img src="../../assets/images/coffee-rounded.png">
              <br>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 21, 2018"
            side="right"
          >
            <div>
              <img src="../../assets/images/coffee-rounded.png">
              <br>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 2020"
            side="left"
          >
            <div>
              <img src="../../assets/images/coffee-rounded.png">
              <br>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 2022"
            side="right"
          >
            <div>
              <img src="../../assets/images/coffee-rounded.png">
              <br>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </q-section>

  <!-- footer -->
  <section class="footer row justify-between q-px-xl q-mt-xl">
    <div class="footer_map row items-center col-3">
      <div class="row">
        <div class="row col-6">
          <p class="col-12">網站導覽</p>
          <router-link class="col-6" to="/">回首頁</router-link>
          <router-link class="col-6" to="/menu">餐飲介紹</router-link>
          <router-link class="col-6" to="/about">品牌故事</router-link>
          <router-link class="col-6" to="/about/location">線上MENU</router-link>
          <router-link class="col-6" to="/products">所有活動</router-link>
          <router-link class="col-6" to="/about/location">門市位址</router-link>
          <router-link class="col-6" to="/articles">專欄好文</router-link>
        </div>
        <div class="col-6 q-pl-md">
          <p>支援服務</p>
          <router-link to="/myaccount/orders">報名查詢</router-link>
          <router-link to="/servicce">常見問題</router-link>
          <router-link to="/service/contactus">聯絡我們</router-link>
          <router-link to="/privacy-policy">隱私權政策</router-link>
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
      <q-input v-model="text" placeholder="your Email" type="email" bg-color="black" color="accent" :input-style="{ color: '#E1BF77' }">
        <template v-slot:prepend>
          <q-icon name="mail" class="q-px-sm"/>
        </template>
        <template v-slot:append>
          <q-icon name="send" class="cursor-pointer q-px-sm" />
        </template>
      </q-input>
      <!-- <div class="q-gutter-sm q-mt-md" style="width:100%"  >
        <q-icon name="fa-brands fa-instagram" size="1rem"></q-icon>
        <q-icon name="fa-brands fa-facebook" size="1rem"></q-icon>
        <q-icon name="fa-brands fa-twitter" size="1rem"></q-icon>
      </div> -->
    </div>
  </section>
  <section class="copyright row flex-center">
    Copyright © 2023 Yu-zhen,Su. All rights reserved.
  </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const side = ref('right')
const layout = ref('loose')
</script>
