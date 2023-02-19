<template>
<q-page>
  <q-sectoin class="banner">
    <q-img
      src="../../assets/images/brand_top.avif"
      :ratio="21/4"
    />
  </q-sectoin>
  <q-section class="row items-start justify-center q-gutter-md q-pa-xl" style="max-width:1920px;">
    <div class="col-12"><h5>專欄好文</h5></div>
    <div v-for="article in articles" :key="article._id">
      <ArticleCard class="card-scale" v-bind="article"></ArticleCard>
    </div>
  </q-section>
    <!-- footer -->
  <section class="footer row justify-between q-px-xl">
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
import { reactive } from 'vue'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'
import ArticleCard from '@/components/ArticleCard.vue'

const articles = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/articles')
    articles.push(...data.result)
    // console.log(articles)
    articles.reverse()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
