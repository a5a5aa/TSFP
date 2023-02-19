<template>
  <q-page>
    <q-sectoin class="banner">
      <q-img
          src="../../assets/images/brand_top.avif"
          :ratio="21/4"
        />
    </q-sectoin>
    <section class="cloumn flex-center text-center q-pa-xl">
      <h6 class="q-mb-xl row flex-center">如有任何問題，歡迎來信，或瀏覽&nbsp;
        <q-btn
        icon="fa-regular fa-circle-question" to="/service">&nbsp;常見問題
        </q-btn>
      </h6>
      <div>
        <p>服務信箱：service@singleseat.com</p>
        <p>服務時間：週一至週五週&nbsp;&nbsp;9:30-18:30<br>(例假日/國定假日休息)</p>
      </div>
    </section>
    <section class="row flex-center">
      <div class="q-pa-xl bg-white" style="width: 800px">
        <h5
        class="q-mb-xl text-center">聯絡我們</h5>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <div class="row justify-between">
            <q-input
              class="col-12 col-sm-3 q-mb-sm"
              outlined
              v-model="form.name"
              label="姓名 *"
              stack-label
              :dense="dense"
              :rules="[ rules.name, rules.required ]"
            />
            <q-input
              class="col-12 col-sm-4 q-mb-sm"
              outlined
              v-model="form.phone"
              label="手機號碼 *"
              mask="#### - ######"
              stack-label
              :dense="dense"
              :rules="[ rules.phone, rules.required ]"
              :hint="請填寫手機號碼"
            />
            <q-input
              class="col-12 col-sm-4 q-mb-sm"
              outlined
              v-model="form.email"
              label="電子信箱 *"
              stack-label
              :dense="dense"
              :rules="[ rules.email, rules.required ]"
            />
          </div>
          <q-input
          v-model="form.text"
          filled
          type="textarea"
          placeholder="請描述您遇到的問題 *"
          :rules="[ rules.text, rules.required ]"
          />

          <div align="center">
            <q-btn label="送出" type="submit" color="primary"/>
            <q-btn label="重寫" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </section>
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
import { ref, reactive } from 'vue'
import validator from 'validator'
// import { api } from '../boot/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()
const valid = ref(false)
const form = reactive({
  name: '',
  phone: '',
  email: '',
  text: ''
})

const rules = {
  name (value) {
    return (value.length >= 2 && value.length <= 5) || '長度必須為 2 ~ 5 個字'
  },
  email (value) {
    return validator.isEmail(value) || '信箱格式錯誤'
  },
  phone (value) {
    return (value.length > 12) || '手機號碼長度有誤'
  },
  text (value) {
    return (value.length > 7) || '請輸入至少8字元'
  },
  required (value) {
    return !!value || '欄位必填'
  }
}

const onSubmit = async () => {
  if (!valid.value) return
  try {
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '信件已送出，我們將儘速為您處理！'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤，請再試一次！'
    })
  }
}

const onReset = () => {
  form.name = null
  form.phone = null
  form.email = null
  form.text = null
}
</script>
