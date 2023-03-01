<template>
<q-page>
  <div class="row justify-center q-pa-xl q-gutter-xl">
    <div class="column justify-between col-12 col-md-6">
      <div>
        <span class="bg-accent text-white q-px-sm rounded-borders q-mr-sm">{{ product.category }}</span>
        <span class="bg-warning text-white q-px-sm rounded-borders" v-if="product.price === 0">免費</span>
        <h4 class="q-mb-xl q-mt-md">{{ product.name }}</h4>
        <p>{{ product.keyWord }}</p>
        <p><q-icon name="fa-regular fa-clock" class="q-mr-xs"></q-icon>{{ new Date(product.date).toLocaleDateString()}} &nbsp; {{ product.starttime }}</p>
        <p><q-icon name="fa-solid fa-location-dot" class="q-mr-xs"></q-icon>110台北市信義區信義路五段95號2F【MAUNA COFFEE - 象山概念店】</p>
        <p class="text-h6" v-if="product.price !== 0">活動費用：NT$ {{ product.price }}</p>
        <p class="text-h6" v-if="product.price === 0" >活動費用：免費</p>
        <q-form class="q-my-xl">
          <q-btn style="width:200px" type="submit" color="warning" @click="onSignupBtnClick">立即報名</q-btn>
        </q-form>
      </div>
      <q-item class="bg-accent rounded-borders q-pa-md">
        <q-icon name="fa-solid fa-circle-exclamation q-pt-xs q-mr-xs"></q-icon>
        主辦單位承諾提供酒精消毒手部、量測體溫及配戴口罩的措施，記錄實際報到狀況，並禁止體溫超過37.5者入場。
      </q-item>
    </div>
    <div class="col-12 col-md-5">
    <q-img :src="product.image" :ratio="16/9"></q-img>
    <q-scroll-area class="q-mt-lg scroll-area" style="height: 300px; width: 100%;">
      <div class="q-mt-lg pre">{{ product.description }}</div>
    </q-scroll-area>
    </div>
  </div>
  <q-overlay v-if="!product.sell" persistent>
    <h5>已下架</h5>
    <q-btn @click="router.go(-1)">回上頁</q-btn>
  </q-overlay>
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
import { useUserStore } from '../../stores/user'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { signup } = user

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  date: '',
  starttime: '',
  endedtime: '',
  image: '',
  sell: true,
  category: '',
  keyWord: ''
})

const onSignupBtnClick = async () => {
  // console.log(route.params.id)
  await signup(route.params.id)
}

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.date = data.result.date
    product.starttime = data.result.starttime
    product.endedtime = data.result.endedtime
    product.image = data.result.image
    product.keyWord = data.result.keyWord
    product.sell = data.result.sell
    product.category = data.result.category

    document.title = 'MAUNA COFFEE - ' + product.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', product.name)
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
