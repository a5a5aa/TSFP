<template>
  <q-page>
    <div>
      <h5 class="q-mb-lg col-12">
      <q-icon name="fa-solid fa-address-book" size="1.5rem" class="q-mr-sm"></q-icon>基本資料</h5>
      <div style="max-width: 600px" class="bg-white q-pa-xl shadow-2 row justify-between">
        <q-input class="q-mb-md col-5" disable stack-label v-model="form.name"  label="姓名"  :dense="dense" />
        <q-input class="q-mb-md col-5" disable stack-label v-model="form.nickname"  label="暱稱"  :dense="dense" />
        <q-input class="q-mb-md col-5" disable stack-label v-model="form.email"  label="電子信箱"  :dense="dense" />
        <q-input class="q-mb-md col-5" disable stack-label v-model="form.phone"  label="聯絡電話"  :dense="dense" />
        <q-btn class="text-center self-end q-mt-lg" color="primary" icon="edit" label="修改"  @click="form.dialog = true" />
      </div>
    </div>
    <!-- 修改基本資料表單 -->
    <q-dialog class="q-pa-md q-gutter-sm row" no-shake persistent v-model="form.dialog">
      <q-card class="row q-pa-xl">
        <q-form style="width:700px;" @submit.prevent="submit">
          <q-card-title class="col-12">
            <h5 align="center">資料修改</h5>
          </q-card-title>
          <q-card-section class="col-12 row justify-between text-primary">
            <q-input  stack-label class="col-5" v-model="form.name" label="姓名" type="text"></q-input>
            <q-input  stack-label class="col-5" v-model="form.nickname" label="暱稱" type="text"></q-input>
            <q-input  stack-label class="col-5" v-model="form.email" label="電子信箱" type="text"></q-input>
            <q-input  stack-label class="col-5" v-model="form.phone" label="聯絡電話" type="text"></q-input>
          </q-card-section>
          <q-card-actions class="q-mt-md">
            <q-spacer></q-spacer>
            <q-btn :disabled="form.loading" color="grey" @click="form.dialog = false">取消</q-btn>
            <q-btn :disabled="form.loading" color="warning" type="submit">儲存</q-btn>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { apiAuth } from '../../boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const form = reactive({
  name: '',
  nickname: '',
  phone: '',
  email: '',
  loading: false,
  dialog: false
})

const submit = async () => {
  form.loading = true
  try {
    await apiAuth.patch('/users/persional-info', form)
    Swal.fire({
      width: '18rem',
      icon: 'success',
      text: '編輯成功',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
    form.dialog = false
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: error?.response?.data.message || '發生錯誤',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
  }
  form.loading = false
}

(async () => {
  try {
    const { data } = await apiAuth.get('/users/me')
    form.name = data.result.name
    form.nickname = data.result.nickname
    form.phone = data.result.phone
    form.email = data.result.email
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: error?.response?.data.message || '發生錯誤',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
  }
})()
</script>
