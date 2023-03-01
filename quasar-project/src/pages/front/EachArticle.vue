<template>
<q-page>
  <div class="section_1 row justify-center" style="padding: 50px 30px;">
    <div class="col-12 col-md-6 q-pa-md">
      <q-img :src="article.image" :ratio="16/9" ></q-img>
    </div>
    <div class="column justify-between col-12 col-md-6 q-pa-md">
      <div class="row justify-between">
        <span class="bg-accent text-white q-px-sm rounded-borders q-mr-sm">{{ article.category }}</span>
        <span>{{ new Date(article.date).toLocaleString()}}</span>
        <h4 class="q-mb-xl q-mt-md">{{ article.title }}</h4>
        <p class="text-grey">{{ article.shortDesc }}</p>
      </div>
    </div>
    <div style="font-size:1.2rem;" class="q-mt-xl q-px-lg pre col-12">{{ article.articleText }}</div>
  </div>
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
import { reactive } from 'vue'
import { api } from '../../boot/axios'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'

const route = useRoute()
const router = useRouter()

const article = reactive({
  _id: '',
  title: '',
  articleText: '',
  date: '',
  image: '',
  category: '',
  shortDesc: ''
});

(async () => {
  try {
    const { data } = await api.get('/articles/' + route.params.id)
    article._id = data.result._id
    article.title = data.result.title
    article.articleText = data.result.articleText
    article.date = data.result.date
    article.image = data.result.image
    article.shortDesc = data.result.shortDesc
    article.category = data.result.category

    document.title = 'MAUNA COFFEE - ' + article.title
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: '取得商品失敗',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b'
    })
    router.go(-1)
  }
})()
</script>

<style lang="scss">
p {
  font-size: 1rem;
}

// 換行
.pre{
  white-space: pre-wrap;
}

.swal2-container {
  z-index: 10000;
}
</style>
