<template>
  <q-page class="row flex-center">
    <div class="login text-center q-pa-xl bg-white rounded-borders shadow-5">
      <h5>會員登入</h5>
      <q-form
        ref="valid"
        @submit="login"
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

        <q-input
          :type="isPwd ? 'password' : 'text'"
          v-model="form.password"
          label="密碼 *"
          lazy-rules
          :rules="[ rules.required ]"
        >
          <template v-slot:prepend>
            <q-icon name="fa-solid fa-lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="btn row flex-center">
          <q-btn class="login_btn col-4" label="登入" type="submit" color="primary"/>
          <q-btn class="forget_password" label="忘記密碼" type="reset" color="primary" flat to="/reset"/>
        </div>
        <q-btn class="to_login" label="還不是會員？&nbsp;立即註冊&nbsp;" type="text" flat to="/register">
        <q-icon name="fa-solid fa-circle-arrow-right"></q-icon>
        </q-btn>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import validator from 'validator'
import { useUserStore } from '@/stores/user.js'
const user = useUserStore()

const valid = ref(false)
const loading = ref(false)
const isPwd = ref(true)
const form = reactive({
  email: '',
  password: ''
})

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  email (value) {
    return validator.isEmail(value) || '信箱格式錯誤'
  }
}

const login = async () => {
  loading.value = true
  await user.login(form)
  loading.value = false
}
</script>
