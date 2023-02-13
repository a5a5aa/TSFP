<template>
  <div>
    <q-layout view="lHh Lpr lff" style="height: 300px" class="shadow-2">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar class="bg-white">
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn name="回管理首頁" label="回管理首頁" class="bg-info text-white" to="/admin">
          </q-btn>
          <div class="q-mr-sm">
            <q-btn class="q-pa-sm text-primary" variant="text" rounded text-accent to="/">
            <q-icon name="fa-solid fa-home" size="1.3rem"></q-icon>
            <q-tooltip class="bg-primary">回官網首頁</q-tooltip>
            </q-btn>
          </div>
          <div class="q-mr-sm">
            <q-btn class="q-pa-sm text-primary" variant="text" rounded text-accent to="/admin/products">
            <q-icon name="fa-solid fa-bell" size="1.3rem"></q-icon>
            <q-tooltip class="bg-primary">通知</q-tooltip>
            </q-btn>
          </div>
          <div>
            <q-btn class="q-pa-sm text-primary" variant="text" rounded text-accent @click="logout">
            <q-icon name="fa-solid fa-arrow-right-from-bracket" size="1.3rem"></q-icon>
            <q-tooltip class="bg-primary">登出</q-tooltip>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="0"
        persistent
        show-if-above
        no-swipe-close
      >
        <q-scroll-area class="bg-primary text-white" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-list" />
              </q-item-section>

              <q-item-section>
                總覽
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-regular fa-file-lines" />
              </q-item-section>

              <q-item-section>
                活動管理
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-regular fa-file-lines" />
              </q-item-section>

              <q-item-section>
                報名管理
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-address-book" />
              </q-item-section>

              <q-item-section>
                會員管理
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/images/photo_3.avif" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">管理員01</div>
            <div>admin@singleseat.com</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user'

const drawer = ref(true)
const user = useUserStore()
const { logout } = user

</script>

<style>
body {
  background: white;
}
.q-btn:before{
  box-shadow: none;
}
</style>
