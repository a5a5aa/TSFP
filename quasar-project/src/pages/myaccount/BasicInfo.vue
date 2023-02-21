<template>
  <q-page>
    <div>
      <h5 class="q-mb-lg col-12">
      <q-icon name="fa-solid fa-address-book" size="1.5rem" class="q-mr-sm"></q-icon>基本資料</h5>
      <div style="max-width: 600px" class="bg-white q-pa-xl shadow-2 row justify-between">
        <q-input class="q-mb-md col-5" disable stack-label v-model="name"  label="姓名"  :dense="dense" />
        <q-input class="q-mb-md col-5" disable stack-label v-model="nickname"  label="暱稱"  :dense="dense" />
        <q-input class="q-mb-md col-5" disable stack-label v-model="email"  label="電子信箱"  :dense="dense" />
        <q-input class="q-mb-md col-5" disable stack-label v-model="phone"  label="聯絡電話"  :dense="dense" />
        <q-btn class="text-center self-end q-mt-lg" color="primary" icon="edit" label="修改" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const { email, name, nickname, phone } = storeToRefs(user)

</script>
