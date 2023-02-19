<template>
  <q-page>
    <q-sectoin class="banner">
      <q-img
          src="../../assets/images/brand_top.avif"
          :ratio="16/9"
        />
    </q-sectoin>

    <q-scetion class="section02">
        <div class="box1">
          <h4>我是標題1我是標題1</h4>
          <h5>我是標題1我是標題1我是標題1</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum cupiditate nihil ea totam labore, aut fuga facilis rerum ducimus.</p>
          <q-img
            width="200px"
            src="../../assets/images/about_1.jpg"></q-img>
        </div>
        <div class="box2">
          <q-img
            width="70%"
            src="../../assets/images/about_3.jpg"></q-img>
        </div>
        <div class="box3">
          <q-img
            width="100%"
            src="../../assets/images/about_2.jpg"></q-img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque quidem nesciunt optio laboriosam doloribus earum quam eaque quasi tenetur.</p>
          <q-btn outline rounded to="/lectures">查看近期活動</q-btn>
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
          <a class="col-6" href="/">回首頁</a>
          <a class="col-6" href="/menu">餐飲介紹</a>
          <a class="col-6" href="/about">品牌故事</a>
          <a class="col-6" href="/about/location">線上MENU</a>
          <a class="col-6" href="/products">所有活動</a>
          <a class="col-6" href="/about/location">門市位址</a>
          <a class="col-6" href="/articles">專欄好文</a>
        </div>
        <div class="col-6 q-pl-md">
          <p>支援服務</p>
          <a href="/myaccount/myevents">報名查詢</a>
          <a href="/servicce">常見問題</a>
          <a href="/service/contactus">聯絡我們</a>
          <a href="/privacy-policy">隱私權政策</a>
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
      <p>訂閱電子報即時掌握最新消息</p>
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
