<template>
  <div>
    <q-layout view="lHh Lpr lff" class="shadow-2">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar class="bg-white">
          <q-space></q-space>
          <q-btn name="回管理首頁" label="回管理首頁" class="bg-info text-white q-mr-lg" to="/admin">
          </q-btn>
          <div class="q-mr-sm">
            <q-btn class="q-pa-sm text-primary" variant="text" rounded text-accent to="/">
            <q-icon name="fa-solid fa-home" size="1.3rem"></q-icon>
            <q-tooltip class="bg-primary">回官網首頁</q-tooltip>
            </q-btn>
          </div>
          <div class="q-mr-sm">
            <q-btn class="q-pa-sm text-primary" variant="text" rounded text-accent>
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
        <q-scroll-area class="bg-primary" style="height: calc(100% - 200px); margin-top: 200px; border-right: 1px solid #ddd">
          <q-list padding class="q-pt-xl text-accent">
            <q-item v-ripple  to="/admin/products">
              <q-item-section avatar>
                <q-icon name="fa-regular fa-file-lines" />
              </q-item-section>
              <q-item-section>
                活動管理
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/admin/allorders">
              <q-item-section avatar>
                <q-icon name="fa-regular fa-file-lines" />
              </q-item-section>

              <q-item-section>
                報名管理
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/admin/articles">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-address-book" />
              </q-item-section>

              <q-item-section>
                文章管理
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/admin/allusers">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-address-book" />
              </q-item-section>

              <q-item-section>
                會員管理
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/images/about_1.jpg" style="height: 200px">
          <div class="absolute-bottom bg-transparent">
            <div class="text-weight-bold">管理員01</div>
            <div>admin@maunacoffee.com</div>
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

.q-item.q-router-link--active{
  background: #E1BF77;
}
</style>
