<template>
  <q-page>
    <q-sectoin class="banner row">
      <q-img
        src="../../assets/images/banner_service.jpg"
        style="max-height:35vh; width:100vw;"
      />
      <div class="bg-mask mask-text col-12 column flex-center">
        <p class="col-2 text-h3">SERVICE</p>
        <p class="col-2 text-h5">客服資訊</p>
      </div>
    </q-sectoin>
    <section class="section_1 cloumn flex-center text-center q-pa-xl">
      <!-- <h5 class="field-title q-mb-xl">聯絡我們 CONTACT US</h5> -->
      <h6 class="row flex-center field-title q-mb-lg">如有任何問題歡迎來信，或瀏覽&nbsp;
        <q-btn outline dense class="q-pr-sm" to="/service">
        <q-icon name="fa-regular fa-circle-question" size="1.2rem" class="q-mx-xs"></q-icon>
        常見問題
        </q-btn>
      </h6>
      <div>
        <p>服務信箱：service@singleseat.com</p>
        <p>服務時間：週一至週五週&nbsp;&nbsp;9:30-18:30<br>(例假日/國定假日休息)</p>
      </div>
    </section>
    <section class="section_2 row flex-center q-px-xl">
      <div class="q-pa-xl bg-white shadow-5" style="width: 800px">
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
      width: '18rem',
      icon: 'success',
      text: '信件已送出，我們將儘速為您處理！',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: error?.response?.data?.message || '發生錯誤，請再試一次！',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
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
