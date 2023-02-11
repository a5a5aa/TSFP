<template>
  <q-page>
    <q-section class="banner">
      <q-img
          src="../../assets/images/brand_top.avif"
          :ratio="21/4"
        />
    </q-section>
    <section>
      <div class="q-ma-lg title text-primary text-center">
        <h5>常見問題</h5>
      </div>
      <div class="q-pa-md q-gutter-md row flex-center">
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="row items-center text-h5 q-mt-sm q-mb-xs">
            <q-icon
            name="fa-solid fa-circle-question">
            </q-icon>
            &nbsp;
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
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="row items-center text-h5 q-mt-sm q-mb-xs">
            <q-icon
            name="fa-solid fa-circle-question">
            </q-icon>
            &nbsp;
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
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      expanded: ref(false),
      lorem: '本次課程將邀請整聊師-謝琪琳帶大家學習如何讓空間做最有效的利用。 居家整聊室致力於透過「整聊」概念，讓台灣家庭都能擁有美好生活，全台灣300+整聊師幫助超過5000+家庭找回家的秩序。 讓懂你的整理收納專家，傾聽你理解你，幫助你找回家的歸屬感。'
    }
  }
}
</script>
