<template>
<q-page>
  <q-sectoin class="banner row">
    <q-img
      src="../../assets/images/banner_articles.jpg"
      style="max-height:35vh; width:100vw;"
    />
    <div class="bg-mask mask-text col-12 column flex-center">
      <p class="col-2 text-h3">ARTICLES</p>
      <p class="col-2 text-h5">專欄好文</p>
    </div>
  </q-sectoin>
  <section class="section_1 row flex-center q-gutter-sm" style="max-width:1920px;">
    <h5 class="field-title q-mb-xl col-12">專欄好文 ARTICLES</h5>
    <div v-for="article in articles" :key="article._id">
      <ArticleCard class="card-scale" v-bind="article"></ArticleCard>
    </div>
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
