<template>
<q-page>
  <!-- banner -->
  <sectoin class="banner q-mb-xl">
    <img
      style="width:100%"
      src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      :ratio="16/9"
    />
  </sectoin>
  <!-- section_1 - 服務簡介 -->
  <section class="section_1 home_section_1 row justify-center q-px-xl">
    <div class="col col-12 col-sm-3 row justify-center">
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
    </div>
  </section>
  <!-- section_2 - 品牌簡介 -->
  <section class="section_2 home_section_2">
    <q-card class="my-card row flex-center q-mx-xl">
      <img class="col-md-6" src="../assets/images/單人座.png">
      <q-card-section class="col-md-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsa libero veniam nemo obcaecati excepturi neque sapiente laudantium quas unde.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsa libero veniam nemo obcaecati excepturi neque sapiente laudantium quas unde.
      </q-card-section>
    </q-card>
  </section>
  <!-- section_3 - 活動報名 carousel -->
  <section class="section_3 home_section_3">
    <h5 class="text-center q-mb-xl">精選活動</h5>
    <swiper
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
  <!-- section_3 - 手機版 活動報名 carousel -->
  <section class="phone_carousel" >
    <h5 class="text-center q-mb-xl">精選活動</h5>
    <swiper
      navigation
      :modules="modules"
    >
      <swiper-slide v-for="product in products" :key="product._id">
        <ProductCard class="card-scale" v-bind="product"></ProductCard>
      </swiper-slide>
    </swiper>
  </section>
  <!-- section_4 - 形象照展示 -->
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
  <section class="footer column flex-center text-center q-my-xl">
    <div class="logo column items-center">
      <div class="row justify-evenly" style="width: 150px">
        <img style="width:100%" src="../assets/images/logo/logo_1-1-text.png">
      </div>
      <div class="q-gutter-sm">
        <q-icon name="fa-brands fa-instagram"></q-icon>
        <q-icon name="fa-brands fa-facebook"></q-icon>
        <q-icon name="fa-brands fa-twitter"></q-icon>
      </div>
    </div>
    <div class="copyright row flex-center">
      Copyright © 2023 Yu-zhen,Su. All rights reserved.
    </div>
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
const products = reactive([]);
(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
    products.reverse()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
