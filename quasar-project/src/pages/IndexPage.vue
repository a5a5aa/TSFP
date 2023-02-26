<template>
<q-page>
  <!-- banner -->
  <sectoin class="banner q-mb-xl row flex-center" style="position:relative; top:-50px">
    <video style="height:100vh; width:100vw; object-fit:cover;" src="../assets/video/專題_影片2.mp4"  autoplay="true" muted loop >
    </video>
    <div class="bg-mask col-12 row items-center">
      <div class="index_title">
        <p>享受片刻寧靜的美好<br>MAUNA COFFEE</p>
        <q-btn rounded outline to="/about" class="q-mt-xl">瞭解更多</q-btn>
      </div>
      <q-btn round flat class="arrow_down" @click="anchor" ><q-icon name="keyboard_arrow_down" size="50px"></q-icon></q-btn>
    </div>
  </sectoin>
  <!-- section - 最新消息 -->
  <section class="section_1 home_section_1 row q-px-xl">
    <div class="news q-py-md col-10 col-md-6 shadow-2">
      <h5 class="text-center q-mb-sm">最新消息 NEWS</h5>
      <q-list class="q-pa-md" style="max-height:200px; overflow:scroll; ">
        <q-item clickable>
          <q-items-section class="q-mr-sm">
          <span class="text-white bg-warning rounded-borders q-px-xs">新品上市</span>
          </q-items-section>
          <q-item-section>
            <q-item-label >莓好時光風味果茶，一起享受春天的迷人風采！</q-item-label>
            <q-item-label caption lines="1">在這個春天尋求片刻放縱？啜飲一口帶有酥脆草莓餅乾碎片的莓好時光果茶，盡情享受草莓果香的甜美口感，擠上奶油、撒上草莓碎片，在口中享受草莓派的迷人風味！</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>2023.01.10</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />
        <q-item clickable>
          <q-items-section class="q-mr-sm">
          <span class="text-white bg-warning rounded-borders q-px-xs">重要公告</span>
          </q-items-section>
          <q-item-section>
            <q-item-label >莓好時光風味果茶，一起享受春天的迷人風采！</q-item-label>
            <q-item-label caption lines="1">在這個春天尋求片刻放縱？啜飲一口帶有酥脆草莓餅乾碎片的莓好時光果茶，盡情享受草莓果香的甜美口感，擠上奶油、撒上草莓碎片，在口中享受草莓派的迷人風味！</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>2023.01.10</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />

        <q-item clickable>
          <q-items-section class="q-mr-sm">
          <span class="text-white bg-warning rounded-borders q-px-xs">新品上市</span>
          </q-items-section>
          <q-item-section>
            <q-item-label >莓好時光風味果茶，一起享受春天的迷人風采！</q-item-label>
            <q-item-label caption lines="1">在這個春天尋求片刻放縱？啜飲一口帶有酥脆草莓餅乾碎片的莓好時光果茶，盡情享受草莓果香的甜美口感，擠上奶油、撒上草莓碎片，在口中享受草莓派的迷人風味！</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>2023.01.10</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset />

        <q-item clickable>
          <q-items-section class="q-mr-sm">
          <span class="text-white bg-warning rounded-borders q-px-xs">新品上市</span>
          </q-items-section>
          <q-item-section>
            <q-item-label >莓好時光風味果茶，一起享受春天的迷人風采！</q-item-label>
            <q-item-label caption lines="1">在這個春天尋求片刻放縱？啜飲一口帶有酥脆草莓餅乾碎片的莓好時光果茶，盡情享受草莓果香的甜美口感，擠上奶油、撒上草莓碎片，在口中享受草莓派的迷人風味！</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>2023.01.10</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <!-- <div class="col col-12 col-sm-3 row justify-center">
      <q-card class="my-card column items-center">
        <img src="../assets/images/coffee-rounded.png">
        <q-card-section>
          <div class="text-h6">講座空間</div>
          <div class="text-subtitle2">lecture space</div>
        </q-card-section>
        <q-card-section class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed voluptatum culpa iure placeat alias eveniet laboriosam!
        </q-card-section>
      </q-card>
    </div>
    <div class="col col-12 col-sm-3 row justify-center">
      <q-card class="my-card column items-center">
        <img src="../assets/images/coffee-rounded.png">
        <q-card-section>
          <div class="text-h6">單人用餐</div>
          <div class="text-subtitle2">single seat</div>
        </q-card-section>
        <q-card-section class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed voluptatum culpa iure placeat alias eveniet laboriosam!
        </q-card-section>
      </q-card>
    </div>
    <div class="col col-12 col-sm-3 row justify-center">
      <q-card class="my-card column items-center">
        <img src="../assets/images/coffee-rounded.png">
        <q-card-section>
          <div class="text-h6">專欄分享</div>
          <div class="text-subtitle2">great topic</div>
        </q-card-section>

        <q-card-section class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed voluptatum culpa iure placeat alias eveniet laboriosam!
        </q-card-section>
      </q-card>
    </div> -->
  </section>
  <!-- section - 品牌簡介 -->
  <section class="home_section_2">
    <q-card class="my-card row flex-center q-mx-xl" style="max-width:1000px;">
      <img class="col-md-6" src="../assets/images/單人座.png">
      <q-card-section class="col-md-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsa libero veniam nemo obcaecati excepturi neque sapiente laudantium quas unde.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsa libero veniam nemo obcaecati excepturi neque sapiente laudantium quas unde.
      </q-card-section>
    </q-card>
  </section>
  <!-- section - 服務簡介 -->
  <section class="section_1 home_section_11  row q-px-xl">
    <div class="col col-12 col-sm-3 row justify-center">
      <q-card class="my-card column items-center">
        <img src="../assets/images/coffee-rounded.png">
        <q-card-section>
          <div class="text-h6">講座空間</div>
          <div class="text-subtitle2">lecture space</div>
        </q-card-section>
        <q-card-section class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed
        </q-card-section>
      </q-card>
    </div>
    <div class="col col-12 col-sm-3 row justify-center">
      <q-card class="my-card column items-center">
        <img src="../assets/images/coffee-rounded.png">
        <q-card-section>
          <div class="text-h6">單人用餐</div>
          <div class="text-subtitle2">single seat</div>
        </q-card-section>
        <q-card-section class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed
        </q-card-section>
      </q-card>
    </div>
    <div class="col col-12 col-sm-3 row justify-center">
      <q-card class="my-card column items-center">
        <img src="../assets/images/coffee-rounded.png">
        <q-card-section>
          <div class="text-h6">專欄分享</div>
          <div class="text-subtitle2">great topic</div>
        </q-card-section>

        <q-card-section class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit quae maxime sed
        </q-card-section>
      </q-card>
    </div>
  </section>
  <!-- section - 活動報名 carousel -->
  <section class="section_3 home_section_3">
    <h5 class="text-center q-mb-xl">精選活動 Featured Events</h5>
    <swiper
      loop=true
      :scrollbar="{ draggable: true }"
      navigation
      :modules="modules"
      :slides-per-view="3"
      :space-between="0"
      :effect="'coverflow'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }"
    >
      <swiper-slide v-for="product in products" :key="product._id">
        <ProductCard class="card-scale" v-bind="product"></ProductCard>
      </swiper-slide>
    </swiper>
  </section>
  <!-- section - 手機版 活動報名 carousel -->
  <section class="phone_carousel" >
    <h5 class="q-mb-xl field-title">精選活動</h5>
    <swiper
      navigation
      :modules="modules"
    >
      <swiper-slide v-for="product in products" :key="product._id">
        <ProductCard class="card-scale" v-bind="product"></ProductCard>
      </swiper-slide>
    </swiper>
  </section>
  <!-- section - 形象照展示 -->
  <section class="section_4 home_section_4 q-my-xl column flex-center">
    <div class="col-1">
      <div class="photo_box">
        <q-img class="rounded-borders" src="../assets/images/photo_1.avif">
        <div class="mask text-center row flex-center">介紹1</div>
        </q-img>
      </div>
      <div class="photo_box">
        <q-img class="rounded-borders" src="../assets/images/photo_2.avif">
        <div class="mask text-center row flex-center">介紹2</div></q-img>
      </div>
    </div>
    <div class="photo_box col-1">
      <q-img class="col-md-6 rounded-borders" src="../assets/images/photo_3.avif">
      <div class="mask text-center row flex-center">介紹3</div></q-img>
    </div>
    <div class="col-1">
      <div class="photo_box">
        <q-img class="rounded-borders" src="../assets/images/photo_4.jpg">
        <div class="mask text-center row flex-center">介紹4</div></q-img>
      </div>
      <div class="photo_box">
        <q-img class="rounded-borders" src="../assets/images/photo_5.jpg">
        <div class="mask text-center row flex-center">介紹5</div></q-img>
      </div>
    </div>
  </section>
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
        <img style="width:100%" src="../assets/images/logo/logo_1-1-text.png">
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
        <!-- <div class="q-gutter-sm q-mt-md" style="width:100%"  >
          <q-icon name="fa-brands fa-instagram" size="1rem"></q-icon>
          <q-icon name="fa-brands fa-facebook" size="1rem"></q-icon>
          <q-icon name="fa-brands fa-twitter" size="1rem"></q-icon>
        </div> -->
      </div>
    </div>
  </section>
  <section class="copyright row flex-center">
    Copyright © 2023 Yu-zhen,Su. 泰山職訓局專題(僅供教學使用)
  </section>
</q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../boot/axios'
import Swal from 'sweetalert2'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import ProductCard from '@/components/ProductCard.vue'

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]
const products = reactive([])
const anchor = () => {
  const height = document.querySelector('.arrow_down').offsetTop + 700
  window.scroll({
    top: height,
    behavior: 'smooth'
  })
};

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
    products.reverse()
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: error?.response?.data?.message || '發生錯誤',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
  }
})()
</script>
