<template>
  <q-page>
    <q-sectoin class="banner row">
      <q-img
        src="../../assets/images/brand_top.avif"
        :ratio="21/4"
      />
      <div class="bg-mask col-12"></div>
    </q-sectoin>
    <section class="section_1 row flex-center q-gutter-sm" style="max-width:1920px;">
      <h5 class="field-title q-mb-xl col-12">講座活動 Lectures & Events</h5>
      <div v-for="product in products" :key="product._id">
        <ProductCard class="card-scale card_events" v-bind="product"></ProductCard>
      </div>
    </section>
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
      width: '18rem',
      icon: 'error',
      text: error?.response?.data?.message || '發生錯誤',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b'
    })
  }
})()
</script>
