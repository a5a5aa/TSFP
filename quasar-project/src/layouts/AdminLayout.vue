<template>
  <div>
    <q-layout view="lHh Lpr lff" class="shadow-2">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar class="bg-white admin-toolbar">
          <q-space></q-space>
          <q-btn dense icon="home" name="回官網" label="回官網" class="bg-info text-white q-mr-md q-px-md" to="/">
          </q-btn>
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
          <q-list padding class="admin-sidebar q-pt-xl text-accent">
            <q-item clickable to="/admin/products">
              <q-item-section avatar>
                <q-icon name="fa-brands fa-codepen" class="q-px-sm" size="1.4rem" />
              </q-item-section>
              <q-item-section>
                活動管理
              </q-item-section>
            </q-item>

            <q-item clickable to="/admin/allorders">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-tags" class="q-px-sm" size="1.4rem" />
              </q-item-section>
              <q-item-section>
                訂單管理
              </q-item-section>
            </q-item>

            <q-item clickable to="/admin/articles">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-book-bookmark" class="q-px-sm" size="1.2rem" />
              </q-item-section>
              <q-item-section>
                文章管理
              </q-item-section>
            </q-item>

            <q-item clickable  to="/admin/allusers">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-user-pen" class="q-px-sm" size="1.2rem"/>
              </q-item-section>
              <q-item-section>
                會員管理
              </q-item-section>
            </q-item>

            <q-item clickable  @click="logout" class="absolute-bottom bg-black">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-arrow-right-from-bracket" class="q-px-sm" size="1.2rem"/>
              </q-item-section>
              <q-item-section>
                登出
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/images/about_1.jpg" style="height: 200px">
          <div class="absolute-bottom bg-transparent">
            <div class="text-weight-bold">{{ name }}</div>
            <div>{{ email }}</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container style=" width:calc(100% - 48px);margin:auto;">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'

const drawer = ref(true)
const user = useUserStore()
const { email, name } = storeToRefs(user)
const { logout } = user

</script>

<style lang="scss">
body {
  background: white;
}

</style>
