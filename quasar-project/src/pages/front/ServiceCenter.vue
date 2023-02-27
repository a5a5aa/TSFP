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
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const expanded1 = ref(false)
const expanded2 = ref(false)
</script>
