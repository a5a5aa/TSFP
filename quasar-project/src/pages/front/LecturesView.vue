<template>
  <q-page>
    <q-sectoin class="banner">
      <q-img
        src="../../assets/images/brand_top.avif"
        :ratio="21/4"
      />
    </q-sectoin>
    <q-section class="row items-start justify-center q-gutter-md q-pa-xl" style="max-width:1920px;">
      <div class="col-12"><h5>所有活動</h5></div>
      <div v-for="product in products" :key="product._id">
        <ProductCard v-bind="product"></ProductCard>
      </div>
    </q-section>
    <!-- 6. footer -->
    <q-section class="footer column flex-center text-center q-my-xl">
      <div class="logo row flex-center">
        <div class="row justify-evenly">
          <img src="../../assets/images/log＿方.png">
          <q-icon name="fa-brands fa-instagram"></q-icon>
          <q-icon name="fa-brands fa-facebook"></q-icon>
          <q-icon name="fa-brands fa-twitter"></q-icon>
        </div>
      </div>
      <div class="copyright row flex-center">
        Copyright © 2023 Yu-zhen,Su. All rights reserved.
      </div>
    </q-section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'
import ProductCard from '@/components/ProductCard.vue'

const products = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
    products.reverse()
    console.log(products)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
