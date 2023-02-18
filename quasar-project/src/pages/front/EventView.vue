<template>
<q-page>
  <div class="row justify-center q-pa-xl q-gutter-xl">
    <div class="column justify-between col-12 col-md-6">
      <div>
        <span class="bg-accent text-white q-px-sm rounded-borders q-mr-sm">{{ product.category }}</span>
        <span class="bg-warning text-white q-px-sm rounded-borders" v-if="product.price === 0">免費</span>
        <h4 class="q-mb-xl q-mt-md">{{ product.name }}</h4>
        <p>{{ product.keyWord }}</p>
        <p><q-icon name="fa-regular fa-clock" class="q-mr-xs"></q-icon>{{ new Date().toLocaleDateString() }} &nbsp; {{ product.starttime }}</p>
        <p><q-icon name="fa-solid fa-location-dot" class="q-mr-xs"></q-icon>110台北市信義區信義路五段95號【Single Seat - 象山概念店】</p>
        <p class="text-h6" v-if="product.price !== 0">活動費用：NT$ {{ product.price }}</p>
        <p class="text-h6" v-if="product.price === 0" >活動費用：免費</p>
        <q-form @submit.prevent="submitCart" class="q-my-xl">
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
</q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from '../../boot/axios'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'
import { useUserStore } from '../../stores/user'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editCart, signup } = user

const valid = ref(false)
const quantity = ref(0)

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

const submitCart = () => {
  if (!valid.value) return
  editCart({ _id: product._id, quantity: quantity.value })
}

const onSignupBtnClick = async () => {
  console.log(route.params.id)
  await signup(route.params.id)
  router.push('/products')
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

    document.title = 'Single Seat | ' + product.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', product.name)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
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
  white-space: pre;
}

.swal2-container {
  z-index: 10000;
}
</style>
