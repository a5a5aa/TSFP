<template>
<q-item :to="'/products/' + _id" dense dark class="justify-center">
  <q-card class="my-card items-start" style="width:350px;" flat bordered>
    <q-img
      contain
      :src="image"
      :ratio="16/9"
    />

    <q-card-section>
      <div class="row items-center" >
        <div class="text-white bg-accent q-pa-xs rounded-borders q-mr-sm" style="font-weight:500;">{{ category }}</div>
        <div class="text-white bg-warning q-pa-xs rounded-borders" style="font-weight:500;" v-if="price === 0">免費</div>
        <div class="text-secondary q-mt-sm q-mb-xs text-right q-ml-auto">
          <q-icon name="fa-regular fa-clock"></q-icon>
          &nbsp;{{ new Date(date).toLocaleDateString()}} &nbsp; {{ starttime }}</div>
      </div>
      <div class="text-h6 q-mt-sm q-mb-xs text-primary text-overflow2" >{{ name }}</div>
      <div class="q-mt-sm q-mb-xs text-grey text-overflow2" >{{ description }}</div>
    </q-card-section>
    <q-separator />

    <q-card-section>
      <div class="text-grey text-overflow1">{{ keyWord }}</div>
    </q-card-section>
  </q-card>
</q-item>
</template>

<script setup>

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
