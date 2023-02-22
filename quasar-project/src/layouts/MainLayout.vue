<template>
<div>
  <q-layout view="1Hh lpr lFf" style="height: 400px">
    <q-header reveal elevated>
      <q-toolbar class="text-accent bg-dark shadow-2 q-px-lg q-pa-xs">
        <div class="topbar_container row justify-between">
          <q-btn class="burger" flat @click="drawer = !drawer" round dense icon="menu" />
          <div class="col-md-2 row flex-center topbar_logo">
            <router-link to="/" style="width:100%;">
              <img style="width:100%;" src="../assets/images/logo/logo_top.png">
            </router-link>
          </div>
          <q-space />
          <q-tabs class="topbar_nav col-md-auto">
            <q-route-tab name="首頁" label="首頁" to="/">
            </q-route-tab>
            <span>/</span>
            <q-route-tab name="關於我們" label="關於我們 ▾" to="/about">
              <q-menu :offset="[-1, 3]">
                <q-list>
                  <q-item clickable class="text-white bg-info" to="/about">
                  <q-item-section style="font-size: 1rem;">品牌故事</q-item-section>
                  </q-item>
                  <q-item clickable class="text-white bg-info" to="/about/location">
                  <q-item-section style="font-size: 1rem;">門市資訊</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-route-tab>
            <span>/</span>
            <q-route-tab name="講座活動" label="講座活動 ▾" to="/products">
              <q-menu :offset="[-1, 3]">
                <q-list>
                  <q-item clickable class="text-white bg-info" to="/products">
                  <q-item-section style="font-size: 1rem;">所有活動</q-item-section>
                  </q-item>
                  <q-item clickable class="text-white bg-info" to="/myaccount/orders">
                  <q-item-section style="font-size: 1rem;">報名查詢</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-route-tab>
            <span>/</span>
            <q-route-tab name="餐飲介紹" label="餐飲介紹 ▾" to="/menu">
              <q-menu :offset="[-1, 3]">
                <q-list class="text-center">
                  <q-item clickable class="text-white bg-info" to="/menu">
                  <q-item-section style="font-size: 1rem;">餐飲介紹</q-item-section>
                  </q-item>
                  <q-item clickable class="text-white bg-info">
                  <q-item-section style="font-size: 1rem;">MENU</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-route-tab>
            <span>/</span>
            <q-route-tab name="專欄好文" label="專欄好文" to="/articles"/>
            <span>/</span>
            <q-route-tab name="客服資訊" label="客服資訊 ▾" to="/service">
              <q-menu :offset="[-1, 3]">
                <q-list class="text-center">
                  <q-item clickable class="text-white bg-info" to="/service">
                  <q-item-section style="font-size: 1rem;">常見問題</q-item-section>
                  </q-item>
                  <q-item clickable class="text-white bg-info" to="/service/contactus">
                  <q-item-section style="font-size: 1rem;">聯絡我們</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-route-tab>
          </q-tabs>
          <q-tabs class="topbar_right q-ml-md">
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
              <q-btn outline dense class="row flex-center q-px-md" v-if="isLogin && !isAdmin" to="/myaccount/orders" variant="text" text-accent>
                <span>嗨!&nbsp;&nbsp;{{ nickname }}</span>
              </q-btn>
              <q-tooltip class="bg-info">會員專區</q-tooltip>
            </div>
            <div class="user_noname">
              <q-btn class="q-pa-sm" v-if="isLogin && !isAdmin" to="/myaccount/orders" variant="text" rounded text-accent>
                <q-icon name="fa-solid fa-user" size="1.3rem"></q-icon>
              </q-btn>
              <q-tooltip class="bg-info">會員專區</q-tooltip>
            </div>
            <div class="q-ml-xs">
              <q-btn class="q-pa-sm" v-if="isLogin" @click="logout" variant="text" rounded text-accent flat>
                <q-icon name="fa-solid fa-arrow-right-from-bracket" size="1.3rem"></q-icon>
              </q-btn>
              <q-tooltip class="bg-info">登出</q-tooltip>
            </div>
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <!-- 側邊欄 -->
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
              <q-item clickable v-ripple to="/about/location" class="col-6 text-center">
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
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- arrow-to-top -->
    <q-page-scroller position="bottom-right" :scroll-offset="120" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="info" />
    </q-page-scroller>
  </q-layout>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'
import { ref } from 'vue'

const user = useUserStore()
const { isLogin, isAdmin, nickname } = storeToRefs(user)
const { logout } = user
const drawer = ref(false)

</script>

<style>
* {
  transition: none;
}</style>
