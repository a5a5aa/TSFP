<template>
<q-card class="my-card items-start" style="width:350px;" flat bordered>
  <q-img
    cover
    height="200px"
    :src="image"
  />

  <q-card-section>
    <div class="row  items-center">
      <div class="text-white bg-accent q-pa-xs rounded-borders q-mr-sm" style="font-weight:500;">{{ category }}</div>
      <div class="text-white bg-warning q-pa-xs rounded-borders" style="font-weight:500;" v-if="price === 0">免費</div>
      <div class="text-secondary q-mt-sm q-mb-xs text-right q-ml-auto">{{ new Date(date).toLocaleDateString()}} &nbsp; {{ starttime }}</div>
    </div>
    <div class="text-h5 q-mt-sm q-mb-xs">{{ name }}</div>
    <div class="text-grey">{{ keyWord }}</div>
  </q-card-section>

  <q-card-actions>
    <!-- <q-btn flat round color="warning" icon="favorite" /> -->
    <q-btn flat color="secondary" label="分享"/>
    <q-btn flat color="warning" label="立即報名"  @click="editCart({_id, quantity: 1})" />

  <q-space />

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
    <q-card-section class="text-subitle2">
      {{ description }}
    </q-card-section>
  </div>
  </q-slide-transition>

</q-card>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  starttime: {
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  },
  keyWord: {
    type: String,
    default: ''
  }
})
const user = useUserStore()
const { editCart } = user
const expanded = ref(false)

</script>

<style>
.q-card{
  cursor: pointer;
}
</style>
