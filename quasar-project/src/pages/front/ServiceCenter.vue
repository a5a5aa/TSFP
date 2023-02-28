<template>
  <q-page>
    <q-sectoin class="banner row">
      <q-img
        src="../../assets/images/banner_service.jpg"
        style="max-height:35vh; width:100vw;"
      />
      <div class="bg-mask mask-text col-12 column flex-center">
        <p class="col-2 text-h3">SERVICE</p>
        <p class="col-2 text-h5">客服資訊</p>
      </div>
    </q-sectoin>
    <section class="section_1">
      <h5 class="field-title q-mb-xl">－ 常見問題 Q &#38; A －</h5>
      <div class="q-pa-md q-gutter-md">
        <q-card class="question" flat bordered>
          <q-card-section>
            <div class="row items-center text-h5 q-mt-sm q-mb-xs">
            <q-icon class="q-mr-md" name="fa-solid fa-circle-question"></q-icon>
            如何成為 MAUNA 會員？</div>
          </q-card-section>
          <q-card-actions>
            <q-space></q-space>
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded1 = !expanded1"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded1">
              <q-separator />
              <q-card-section class="text-subitle">
                1. 請於官方網站頁面右上角點選 【 會員登入 】 <br>2. 進入後點選【 立即註冊 】
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
        <q-card class="question" flat bordered>
          <q-card-section>
            <div class="row items-center text-h5 q-mt-sm q-mb-xs">
            <q-icon class="q-mr-md" name="fa-solid fa-circle-question"></q-icon>
            如何報名講座／工作坊？</div>
          </q-card-section>
          <q-card-actions>
            <q-space></q-space>
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded2 = !expanded2"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded2">
              <q-separator />
              <q-card-section class="text-subitle">
                註冊會員至活動頁點選【 立即報名 】即報名完成，且系統會自動帶入會員資料，若要查看報名資料於官方網站頁面右上角點擊【 會員專區 】查看。
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </section>
    <!-- footer -->
    <section class="footer">
      <div class="row justify-between footer_container q-px-xl">
        <div class="footer_map row items-center col-3">
          <div class="row">
            <div class="row col-6">
              <p class="col-12">網站導覽</p>
              <router-link class="col-6" to="/">回首頁</router-link>
              <router-link class="col-6" to="/menu">餐飲介紹</router-link>
              <router-link class="col-6" to="/about">品牌故事</router-link>
              <router-link class="col-6" to="/" >線上MENU</router-link>
              <router-link class="col-6" to="/products">講座活動</router-link>
              <router-link class="col-6" to="/about/location">門市位址</router-link>
              <router-link class="col-6" to="/articles">專欄好文</router-link>
              <router-link to="/myaccount/orders">會員專區</router-link>
            </div>
            <div class="col-6 q-pl-md">
              <p>支援服務</p>
              <router-link to="/myaccount/orders">報名查詢</router-link>
              <router-link to="/service">常見問題</router-link>
              <router-link to="/service/contactus">聯絡我們</router-link>
              <router-link to="/">隱私權政策</router-link>
            </div>
          </div>
        </div>
        <div class="footer_center q-pa-md" style="width: 170px">
          <img style="width:100%" src="../../assets/images/logo/logo_1-1-text.png">
          <div style="width:100%" class="text-center">
            <q-icon name="fa-brands fa-instagram" size="1rem" class="q-mr-sm"></q-icon>
            <q-icon name="fa-brands fa-facebook" size="1rem" class="q-mr-sm"></q-icon>
            <q-icon name="fa-brands fa-twitter" size="1rem"></q-icon>
          </div>
        </div>
        <div class="subscribe column justify-center col-3" style="max-width: 300px;">
          <p>訂閱電子報即時掌握活動消息</p>
          <q-input dense v-model="text" placeholder="your Email" type="email" bg-color="black" color="accent" :input-style="{ color: '#E1BF77' }">
            <template v-slot:prepend>
              <q-icon name="mail" class="q-px-sm"/>
            </template>
            <template v-slot:append>
              <q-icon name="send" class="cursor-pointer q-px-sm" />
            </template>
          </q-input>
        </div>
      </div>
    </section>
    <section class="copyright row flex-center">
      泰山職訓前端網頁專題(僅作學術使用) by SU-YU-ZHEN
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const expanded1 = ref(false)
const expanded2 = ref(false)
</script>
