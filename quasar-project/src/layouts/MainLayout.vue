<template>
<div>
  <q-layout view="lHh lpr lFf" style="height: 400px">
    <q-header reveal elevated>
      <q-toolbar class="text-accent bg-dark shadow-2 fixed-top q-px-md q-pa-xs">
        <q-tabs class="burger">
          <q-btn @click="drawer = !drawer" round dense icon="menu" />
        </q-tabs>
        <q-avatar class="top_logo" style="width:120px">
          <a style="width:100%" href="/">
            <img width="100%" src="../assets/images/logo＿橫.png">
          </a>
        </q-avatar>
        <q-space />
        <q-tabs class="nav_label" shrink>
          <q-route-tab name="首頁" label="首頁" to="/">
          </q-route-tab>
          <span>/</span>
          <q-route-tab name="關於我們" label="關於我們" to="/about">
            <q-menu :offset="[-2, 4]">
              <q-list>
                <q-item clickable class="text-white bg-info" to="/about">
                <q-item-section style="font-size: 1rem;">品牌介紹</q-item-section>
                </q-item>
                <q-item clickable class="text-white bg-info" to="/location">
                <q-item-section style="font-size: 1rem;">門市位址</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-route-tab>
          <span>/</span>
          <q-route-tab name="活動報名" label="活動報名" to="/lectures">
            <q-menu :offset="[-2, 4]">
              <q-list>
                <q-item clickable class="text-white bg-info" to="/lectures">
                <q-item-section style="font-size: 1rem;">所有活動</q-item-section>
                </q-item>
                <q-item clickable class="text-white bg-info">
                <q-item-section style="font-size: 1rem;">報名查詢</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-route-tab>
          <span>/</span>
          <q-route-tab name="餐飲介紹" label="餐飲介紹" to="/menu">
            <q-menu :offset="[-2, 4]">
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
          <q-route-tab name="專欄好文" label="專欄好文" to="/article"/>
          <span>/</span>
          <q-route-tab name="客服中心" label="客服中心" to="/service">
            <q-menu :offset="[-2, 4]">
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
        <q-tabs class="account_btn">
          <q-btn v-if="!isLogin" to="/login" outline text-accent>
          <q-icon name="fa-solid fa-user" size="1rem">&nbsp;登入</q-icon>
          </q-btn>
          <q-btn v-if="isLogin && isAdmin" to="/admin" variant="text" outline text-accent>
            <q-icon name="fa-solid fa-user-gear" size="1rem">&nbsp;管理</q-icon>
          </q-btn>
          &nbsp;&nbsp;
          <q-btn v-if="isLogin" variant="text" outline text-accent @click="logout">
          <q-icon name="fa-solid fa-arrow-right-from-bracket" size="1rem">&nbsp;登出</q-icon>
          </q-btn>
        </q-tabs>
        <q-tabs class="icon_only">
          <q-btn class="q-pa-sm" v-if="!isLogin" to="/login" rounded text-accent>
          <q-icon name="fa-solid fa-user" size="1.3rem"></q-icon>
          </q-btn>
          <q-btn class="q-pa-sm" v-if="isLogin && isAdmin" to="/admin" variant="text" rounded text-accent>
            <q-icon name="fa-solid fa-user-gear" size="1rem"></q-icon>
          </q-btn>
          <q-btn class="q-pa-sm" v-if="isLogin" variant="text" rounded text-accent @click="logout">
          <q-icon name="fa-solid fa-arrow-right-from-bracket" size="1rem"></q-icon>
          </q-btn>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- arrow-to-top -->
    <q-page-scroller position="bottom-right" :scroll-offset="120" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-layout>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const { isLogin, isAdmin } = storeToRefs(user)
const { logout } = user
</script>
