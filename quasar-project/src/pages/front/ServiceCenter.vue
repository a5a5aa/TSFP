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
      <h5 class="field-title q-mb-xl">常見問題 Q &#38; A</h5>
      <div class="q-pa-md q-gutter-md">
        <q-card class="card_qa" style="max-width:992px; margin:auto;" flat bordered>
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
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subitle">
                本次課程將邀請整聊師-謝琪琳帶大家學習如何讓空間做最有效的利用。 居家整聊室致力於透過「整聊」概念，讓台灣家庭都能擁有美好生活，全台灣300+整聊師幫助超過5000+家庭找回家的秩序。 讓懂你的整理收納專家，傾聽你理解你，幫助你找回家的歸屬感。
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

const expanded = ref(false)
// const expanded2 = ref(false)
</script>
