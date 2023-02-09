<template>
  <q-page class="row flex-center">
    <div class="reset_password text-center q-pa-xl bg-white rounded-borders shadow-5">
      <h5>重設密碼</h5>
      <p class="q-ma-md">請輸入您的電子信箱<br>我們會發送重設密碼連結給您！</p>
      <q-form
        ref="valid"
        @submit="resetPassword"
        class="q-gutter-md q-mt-md"
        >
        <q-input
          v-model="form.email"
          label="電子信箱 *"
          lazy-rules
          :rules="[ rules.email, rules.required ]"
        >
          <template v-slot:prepend>
            <q-icon name="fa-regular fa-envelope" />
          </template>
        </q-input>

        <div class="btn row flex-center">
          <q-btn class="submit col-6" label="發送重設連結" type="submit" color="primary" to="/login"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import validator from 'validator'
import { api } from '../boot/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()

const valid = ref(false)
const loading = ref(false)
const $q = useQuasar()
const timer = ref(0)
const form = reactive({
  name: '',
  nickname: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirm: ''
})

const rules = {
  name (value) {
    return (value.length >= 2 && value.length <= 5) || '長度必須為 2 ~ 5 個字'
  },
  email (value) {
    return validator.isEmail(value) || '信箱格式錯誤'
  },
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  }
}

const resetPassword = async () => {
  if (!valid.value) return
  loading.value = true
  try {
    console.log(form)
    await api.post('/users', form)
    // console.log('post')
    await showLoading()
    await setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: '密碼重設信件已發送',
        text: '請至信箱點擊驗證信件重設密碼'
      })
      router.push('/')
    }, 2000)
  } catch (error) {
    showLoading()
    setTimeout(() => {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }, 2000)
  }
  loading.value = false
}

const showLoading = () => {
  $q.loading.show()
  timer.value = setTimeout(() => {
    $q.loading.hide()
    timer.value = 0
  }, 2000)
}

// function onBeforeUnmount () {
//   if (timer !== 0) {
//     clearTimeout(timer)
//     $q.loading.hide()
//   }
// }
</script>
