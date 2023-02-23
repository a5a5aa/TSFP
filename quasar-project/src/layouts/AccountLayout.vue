<template>
<q-layout view="1Hh lpr lFf">
  <q-header reveal elevated>
    <q-toolbar class="topbar text-accent bg-dark shadow-2 q-px-lg q-pa-xs">
      <q-btn class="burger" flat @click="drawer = !drawer" dense icon="menu" />
      <router-link style="width:170px" to="/" class="topbar_logo">
        <img  style="width:100%" src="../assets/images/logo/logo_top.png">
      </router-link>
      <q-space />
      <q-btn flat label="首頁" class="dropdown text-accent" to="/"></q-btn>
      <span class="slash">/</span>
      <q-btn flat label="關於我們 ▾" class="dropdown text-accent">
        <q-list style="min-width: 100px" class="dropdown-content">
          <q-item clickable v-close-popup to="/about" class="text-white" >
            <q-item-section  style="font-size: 1rem;">品牌故事</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup to="/about/location" class="text-white">
            <q-item-section style="font-size: 1rem;">門市資訊</q-item-section>
          </q-item>
        </q-list>
      </q-btn>
      <span class="slash">/</span>
      <q-btn flat label="講座活動 ▾" class="dropdown text-accent">
        <q-list style="min-width: 100px" class="dropdown-content">
          <q-item clickable v-close-popup to="/products" class="text-white" >
            <q-item-section  style="font-size: 1rem;">所有活動</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup to="/myaccount/orders" class="text-white">
            <q-item-section style="font-size: 1rem;">報名查詢</q-item-section>
          </q-item>
        </q-list>
      </q-btn>
      <span class="slash">/</span>
      <q-btn flat label="餐飲介紹" class="dropdown text-accent" to="/menu"></q-btn>
      <span class="slash">/</span>
      <q-btn flat label="專欄好文" class="dropdown text-accent" to="/articles"></q-btn>
      <span class="slash">/</span>
      <q-btn flat label="客服資訊 ▾" class="dropdown text-accent">
        <q-list style="min-width: 100px" class="dropdown-content">
          <q-item clickable v-close-popup to="/service" class="text-white">
            <q-item-section  style="font-size: 1rem;">常見問題</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup to="/service/contactus" class="text-white">
            <q-item-section style="font-size: 1rem;">聯絡我們</q-item-section>
          </q-item>
        </q-list>
      </q-btn>
      <q-tabs class="q-ml-lg">
        <div>
          <q-btn class="q-pa-sm" v-if="!isLogin" to="/login" rounded text-accent flat>
          <q-icon name="fa-solid fa-user" size="1.3rem"></q-icon>
          </q-btn>
          <q-tooltip class="bg-info">會員登入</q-tooltip>
        </div>
        <div>
          <q-btn class="q-pa-sm" v-if="isLogin && isAdmin" to="/admin/products" variant="text" rounded text-accent flat>
            <q-icon name="fa-solid fa-user-gear" size="1.3rem"></q-icon>
          </q-btn>
          <q-tooltip class="bg-info">管理</q-tooltip>
        </div>
        <div class="user_name">
          <q-btn outline dense class="row flex-center q-px-md q-mr-sm" v-if="isLogin && !isAdmin" to="/myaccount/orders" variant="text" text-accent>
            <span>嗨!&nbsp;&nbsp;{{ nickname }}</span>
          </q-btn>
          <q-tooltip class="bg-info">會員專區</q-tooltip>
        </div>
        <div class="user_noname">
          <q-btn class="q-pa-sm" v-if="isLogin && !isAdmin" to="/myaccount/orders" variant="text" rounded text-accent flat>
            <q-icon name="fa-solid fa-user" size="1.3rem"></q-icon>
          </q-btn>
          <q-tooltip class="bg-info">會員專區</q-tooltip>
        </div>
        <div>
          <q-btn class="q-pa-sm" v-if="isLogin" @click="logout" variant="text" rounded text-accent flat>
            <q-icon name="fa-solid fa-arrow-right-from-bracket" size="1.3rem"></q-icon>
          </q-btn>
          <q-tooltip class="bg-info">登出</q-tooltip>
        </div>
      </q-tabs>
    </q-toolbar>
  </q-header>
  <q-sectoin class="banner">
    <q-img
      src="../../src/assets/images/brand_top.avif"
      :ratio="21/4"
    />
  </q-sectoin>
  <div class="item_bar q-ml-xl">
    <!-- <h5 class="q-mb-lg text-center">會員管理</h5> -->
    <q-list bordered separator class="shadow-2 bg-white account-sidebar">
      <q-item class="row flex-center q-pa-lg bg-primary">
        <q-item-section class="column flex-center">
          <q-avatar size="86px" class="q-mb-md">
            <img :src="avatar">
          </q-avatar>
          <q-item-label class="text-h6 text-white q-mb-sm">{{ nickname }}</q-item-label>
          <q-item-label class="text-h7 text-white">{{ email }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/myaccount/orders" class="row flex-center">
        <q-icon name="fa-solid fa-clipboard-list" size="1.2rem" class="q-mr-md"></q-icon>
        <q-item-section>
          報名查詢
          <q-item-label>Activity query</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/myaccount/persional-info" class="row flex-center">
        <q-icon name="fa-solid fa-address-book" size="1.3rem" class="q-mr-md"></q-icon>
        <q-item-section>
          基本資料
          <q-item-label>Basic information</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple class="row flex-center">
        <q-icon name="fa-solid fa-comment-dots" size="1.2rem" class="q-mr-md"></q-icon>
        <q-item-section>
          客服中心
          <q-item-label>Service center</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-drawer
    v-model="drawer"
    :width="200"
    :breakpoint="990"
    bordered
    no-swipe-backdrop
    class="bg-primary text-accent sidebar"
  >
    <q-scroll-area class="fit flex justify-center">
      <div class="sidebar2">
        <div>
          <div class="text-center bg-info q-py-sm q-px-lg" style="width:200px;">
            <img
            style="width:100%;"
            src="../../src/assets/images/logo/logo_1200-300.png">
          </div>
          <div class="title q-px-xl text-center bg-black q-py-xs">關於我們</div>
          <div class="row">
            <q-item clickable v-ripple to="/about" class="col-6 text-center">
              <q-item-section class="text-accent" flat>
                品牌介紹
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/about/location" class="col-6 text-center">
              <q-item-section class="text-accent" flat>
                門市資訊
              </q-item-section>
            </q-item>
          </div>
          <div class="title q-px-xl text-center bg-black q-py-xs">講座活動</div>
          <div class="row">
            <q-item clickable v-ripple to="/lectures" class="col-6 text-center">
              <q-item-section class="text-accent" flat>
                所有活動
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/myaccount/orders" class="col-6 text-center">
              <q-item-section class="text-accent" flat>
                報名查詢
              </q-item-section>
            </q-item>
          </div>
          <div class="title q-px-xl text-center bg-black q-py-xs">專欄好文</div>
          <div class="row">
            <q-item clickable v-ripple to="/article" class="col-12 text-center">
              <q-item-section class="text-accent" flat>
                專欄好文
              </q-item-section>
            </q-item>
          </div>
          <div class="title q-px-xl text-center bg-black q-py-xs">客服資訊</div>
          <div class="row">
            <q-item clickable v-ripple to="/service" class="col-6 text-center">
              <q-item-section class="text-accent" flat>
                常見問題
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/service/contactus" class="col-6 text-center">
              <q-item-section class="text-accent" flat>
                聯絡我們
              </q-item-section>
            </q-item>
          </div>
        </div>
        <div>
          <div class="row">
            <q-item clickable v-ripple to="/login" v-if="!isLogin" class="col-6 text-center">
              <q-item-section class="text-accent" flat>
                登入
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/register" v-if="!isLogin" class="col-6 text-center">
              <q-item-section class="text-accent" flat>
                註冊
              </q-item-section>
            </q-item>
          </div>
          <q-item clickable v-ripple to="/admin/products" v-if="isLogin && isAdmin" class="text-center row flex-center">
            <q-icon name="fa-solid fa-user-gear" size="xs" class="col-2"/>
            <q-item-section class="col-4" flat>
              管理
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/myaccount/orders" v-if="isLogin && !isAdmin" class="text-center row flex-center">
            <q-icon name="fa-solid fa-user" size="xs" class="col-2"/>
            <q-item-section class="text-accent col-6" flat>
              我的會員
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="logout" v-if="isLogin" class="text-center row flex-center">
            <q-icon name="logout" size="sm" class="col-2"/>
            <q-item-section class="text-accent col-4" flat>
              登出
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/" class="text-center row justify-center">
            <q-icon name="home" size="sm" class="col-2"/>
            <q-item-section class="text-accent col-4"  flat>
              回首頁
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-scroll-area>
  </q-drawer>
  <q-page-container class="q-px-xl container2" style="float:right; width:calc(100% - 300px); margin:auto;">
    <router-view />
  </q-page-container>
</q-layout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'
import { ref } from 'vue'

const user = useUserStore()
const { isLogin, isAdmin, nickname, email, avatar } = storeToRefs(user)
const { logout } = user
const drawer = ref(false)

</script>

<style lang="scss">

* {
  transition: none;
}
</style>
