<template>
<q-item :to="'/articles/' + _id" style="padding:0;">
  <q-card class="col-md-5" style="width:500px;" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-py-md">
        <span class="bg-accent text-white rounded-borders q-pa-xs">{{ category }}</span>
        <div class="text-h5 q-mt-sm q-mb-xs text-overflow2">{{ title }}</div>
        <p class="text-h7 text-grey q-my-md text-overflow2">{{ shortDesc }}</p>
      </q-card-section>

      <q-card-section class="col-4 col-sm-3 flex flex-center">
        <q-img
          class="rounded-borders"
          cover
          :ratio="1/1"
          :src="image"
        />
      </q-card-section>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <div class="text-grey q-mr-auto q-px-sm text-overflow1" >{{ keyWord }}</div>
      <q-btn flat round color="red" icon="favorite" />
      <q-btn flat round color="primary" icon="share" />
    </q-card-actions>
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
  title: {
    type: String,
    default: ''
  },
  shortDesc: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: ''
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
</script>
