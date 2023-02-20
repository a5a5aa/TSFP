<template>
<div>
  <q-layout view="hHh lpr lFf">
    <q-header reveal elevated>
      <q-toolbar class="text-accent bg-dark shadow-2 q-px-lg q-pa-xs">
          <q-btn class="burger" flat @click="drawer = !drawer" round dense icon="menu" />
          <a style="width:170px" href="/" class="top_logo">
            <img  style="width:100%" src="../assets/images/logo/logo_top.png">
          </a>
        <q-space />
        <q-tabs class="nav_label" shrink>
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
                <q-item clickable class="text-white bg-info">
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
          &nbsp;
          &nbsp;
          &nbsp;
        </q-tabs>
        <q-tabs class="icon_only">
          <div>
            <q-btn class="q-pa-sm" v-if="!isLogin" to="/login" rounded text-accent>
            <q-icon name="fa-solid fa-user" size="1.3rem"></q-icon>
            </q-btn>
            <q-tooltip class="bg-info">會員登入</q-tooltip>
          </div>
          <!-- <div>
            <q-btn class="q-pa-sm" v-if="isLogin && isAdmin" to="/admin" variant="text" rounded text-accent>
            <q-icon name="fa-solid fa-user-gear" size="1.3rem"></q-icon>
            </q-btn>
            <q-tooltip class="bg-info">管理</q-tooltip>
          </div> -->
          <div>
            <q-btn class="q-pa-sm" v-if="isLogin && isAdmin" to="/admin" variant="text" rounded text-accent>
              <q-icon name="fa-solid fa-user-gear" size="1.3rem"></q-icon>
            </q-btn>
            <q-tooltip class="bg-info">管理</q-tooltip>
          </div>
          <div class="q-mr-sm user_name">
            <q-btn outline class="row flex-center" v-if="isLogin && !isAdmin" to="/myaccount" variant="text" text-accent>
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
            <q-btn class="q-pa-sm" v-if="isLogin" @click="logout" variant="text" rounded text-accent>
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
      <q-list bordered separator class="shadow-2 bg-white">
        <q-item class="row flex-center q-pa-lg bg-positive">
          <q-item-section class="column flex-center">
            <q-avatar size="86px" class="q-mb-md">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-item-label class="text-h6 text-white q-mb-sm">{{ nickname }}</q-item-label>
            <q-item-label class="text-h7 text-white">{{ email }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/myaccount/orders" class="row flex-center">
          <q-icon name="fa-solid fa-magnifying-glass" size="1.2rem" class="q-mr-md"></q-icon>
          <q-item-section>
            報名查詢
            <q-item-label>Activity query</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/myaccount/persional-information" class="row flex-center">
          <q-icon name="fa-solid fa-address-book" size="1.3rem" class="q-mr-md"></q-icon>
          <q-item-section>
            基本資料
            <q-item-label>Basic profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/myaccount/persional-information" class="row flex-center">
          <q-icon name="fa-solid fa-comment-dots" size="1.2rem" class="q-mr-md"></q-icon>
          <q-item-section>
            客服中心
            <q-item-label>Service center</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

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
            <q-item clickable v-ripple to="/admin" v-if="isLogin && isAdmin" class="text-center row flex-center">
              <q-icon name="fa-solid fa-user-gear" size="xs" class="col-2"/>
              <q-item-section class="col-4" flat>
                管理
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/myaccount" v-if="isLogin && !isAdmin" class="text-center row flex-center">
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
    <!-- <q-scroll-area class="fit">
      <div class=" sidebar q-pa-xs">
        <div>
          <div class="title q-px-xl text-center bg-black q-py-xs">關於我們</div>
          <q-btn class="q-px-xl" to="/about">品牌故事</q-btn>
          <q-btn class="q-px-xl" to="/about/location">門市資訊</q-btn>
          <div class="title q-px-xl text-center bg-black q-py-xs">活動報名</div>
          <q-btn class="q-px-xl" to="/lectures">所有活動</q-btn>
          <q-btn class="q-px-xl">報名查詢</q-btn>
          <div class="title q-px-xl text-center bg-black q-py-xs">餐飲介紹</div>
          <q-btn class="q-px-xl" to="/menu">餐飲介紹</q-btn>
          <q-btn class="q-px-xl">MENU</q-btn>
          <div class="title q-px-xl text-center bg-black q-py-xs">專欄好文</div>
          <q-btn class="q-px-xl" to="/lecture">專欄好文</q-btn>
          <div class="title q-px-xl text-center bg-black q-py-xs">客服資訊</div>
          <q-btn class="q-px-xl" to="/service">常見問題</q-btn>
          <q-btn class="q-px-xl" to="/service/contactus">聯絡我們</q-btn>
          <div class="title q-px-xl text-center bg-black q-py-xs" v-if="!isLogin">會員管理</div>
          <q-btn class="q-px-xl" v-if="!isLogin" to="/login">會員登入</q-btn>
          <q-btn class="q-px-xl" v-if="!isLogin" to="/register">會員註冊</q-btn>
        </div>
        <div>
          <q-btn class="q-px-xl" v-if="isLogin" @click="logout">會員登出</q-btn>
          <q-btn class="q-px-xl" to="/">回首頁</q-btn>
        </div>
      </div>
    </q-scroll-area> -->
    </q-drawer>
    <q-page-container class="q-px-xl container2" style="float:right; width:calc(100% - 300px); margin:auto;">
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
const { isLogin, isAdmin, nickname, email } = storeToRefs(user)
const { logout } = user
const drawer = ref(false)

</script>

<style>
* {
  transition: none;
}</style>
