<template>
  <div>
    <q-toolbar class="bg-white text-primary shadow-2">
      <q-space />
      <q-btn underline name="回管理首頁" label="回管理首頁" class="bg-info text-white" to="/admin">

      </q-btn>
      <q-btn-toggle
        v-model="model"
        flat stretch
        toggle-color="info"
        :options="options"
        to="/admin"
      />
      <div class="q-mr-sm">
        <q-btn class="q-pa-sm" variant="text" rounded text-accent to="/">
        <q-icon name="fa-solid fa-home" size="1.3rem"></q-icon>
        <q-tooltip class="bg-primary">回官網首頁</q-tooltip>
        </q-btn>
      </div>
      <div class="q-mr-sm">
        <q-btn class="q-pa-sm" variant="text" rounded text-accent to="/admin/notice">
        <q-icon name="fa-solid fa-bell" size="1.3rem"></q-icon>
        <q-tooltip class="bg-primary">通知</q-tooltip>
        </q-btn>
      </div>
      <div>
        <q-btn class="q-pa-sm" variant="text" rounded text-accent @click="logout">
        <q-icon name="fa-solid fa-arrow-right-from-bracket" size="1.3rem"></q-icon>
        <q-tooltip class="bg-primary">登出</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'

const model = ref('admin-home')
const user = useUserStore()
// const { isLogin } = storeToRefs(user)
const { logout } = user

const options = [
  { label: '回管理首頁', value: 'admin-home' }
]

</script>

<style>
body {
  background: white;
}
.q-btn:before{
  box-shadow: none;
}
</style>
