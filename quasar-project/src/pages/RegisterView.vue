<template>
  <q-page class="row flex-center">
    <div class="register text-center q-pa-xl bg-white rounded-borders shadow-5 q-my-xl ">
      <h5>會員註冊</h5>
      <q-form
        ref="valid"
        @submit.prevent="register"
        class="q-gutter-md q-mt-md"
        >
        <div class="row flex-center justify-between">
          <q-input
            class="col-xs-6"
            v-model="form.name"
            label="姓名 *"
            lazy-rules
            :rules="[ rules.name, rules.required ]"
          >
            <template v-slot:prepend>
              <q-icon name="fa-solid fa-user" />
            </template>
          </q-input>

          <div class="col-sm-6">
            <q-radio v-model="gender" val="male" label="先生" class="q-mr-md male"/>
            <q-radio v-model="gender" val="female" label="小姐" />
          </div>
        </div>

        <div class="row justify-between ">
          <q-input
            class="col-xs-12 col-sm-5"
            v-model="form.nickname"
            label="暱稱 *"
            lazy-rules
            :rules="[ rules.required, rules.required ]"
          >
            <template v-slot:prepend>
              <q-icon name="fa-brands fa-odnoklassniki" />
            </template>
          </q-input>
          <q-input
            class="col-xs-12 col-sm-6"
            v-model="form.phone"
            label="手機號碼 *"
            mask="#### - ######"
            lazy-rules
            :rules="[ rules.phone, rules.required ]"
            >
            <template v-slot:prepend>
              <q-icon name="fa-solid fa-phone" />
            </template>
          </q-input>
        </div>
          <q-input
            v-model="form.email"
            label="電子信箱 *"
            hint="* 此信箱將作為未來帳號使用"
            lazy-rules
            :rules="[ rules.email, rules.required ]"
          >
            <template v-slot:prepend>
              <q-icon name="fa-regular fa-envelope" />
            </template>
          </q-input>
        <q-input
          type="password"
          v-model="form.password"
          label="密碼 *"
          lazy-rules
          :rules="[ rules.length, rules.required ]"
        >
          <template v-slot:prepend>
            <q-icon name="fa-solid fa-lock" />
          </template>
        </q-input>
        <q-input
          type="password"
          v-model="form.passwordConfirm"
          label="確認密碼 *"
          lazy-rules
          :rules="[ rules.passwordConfirm, rules.required]"
        >
          <template v-slot:prepend>
            <q-icon name="fa-solid fa-lock" />
          </template>
        </q-input>

        <div class="btn row flex-center">
          <q-btn class="submit col-4" label="加入會員" type="submit" color="primary" @click="showLoading"/>
        </div>
        <q-btn class="to_register" label="已有帳號？&nbsp;立即登入&nbsp;" to="/login" flat >
        <q-icon name="fa-solid fa-circle-arrow-right"></q-icon></q-btn>
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
const gender = ref('male')
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
  phone (value) {
    return (value.length > 12) || '手機號碼長度有誤'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  },
  passwordConfirm (value) {
    return (value === form.password) || '密碼不一致'
  }
}

const register = async () => {
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
        title: '成功',
        text: '註冊成功'
      })
      router.push('/login')
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
