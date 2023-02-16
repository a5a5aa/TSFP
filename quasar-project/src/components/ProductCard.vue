<template>
<q-item :to="'/products/' + _id" dense dark target="_blank">
  <q-card class="my-card items-start" style="width:350px;" flat bordered>
    <q-img
      cover
      height="200px"
      :src="image"
    />

    <q-card-section>
      <div class="row  items-center" >
        <div class="text-white bg-accent q-pa-xs rounded-borders q-mr-sm" style="font-weight:500;">{{ category }}</div>
        <div class="text-white bg-warning q-pa-xs rounded-borders" style="font-weight:500;" v-if="price === 0">免費</div>
        <div class="text-secondary q-mt-sm q-mb-xs text-right q-ml-auto">
          <q-icon name="fa-regular fa-clock"></q-icon>
          &nbsp;{{ new Date(date).toLocaleDateString()}} &nbsp; {{ starttime }}</div>
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs text-primary" >{{ name }}</div>
      <div class="text-grey">{{ keyWord }}</div>
    </q-card-section>

    <q-separator />
    <q-card-actions vertical align="center"  >
      <!-- <q-btn flat round color="warning" icon="favorite" /> -->
      <!-- <q-btn flat color="secondary" label="分享"/> -->
      <q-btn style="width:100%;" flat color="warning" label="瞭解詳情" :to="'/products/' + _id" />
    <q-space />
    </q-card-actions>
  </q-card>
</q-item>
</template>

<script setup>
// import { useUserStore } from '@/stores/user'

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
// const user = useUserStore()
// const { signup } = user

</script>
