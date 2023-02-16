<template>
<q-card class="my-card col-md-5" style="width:400px;" flat bordered>
  <q-card-section horizontal>
    <q-card-section class="q-py-md">
      <span class="bg-accent text-white rounded-borders q-px-sm q-py-xs">品味</span>
      <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
      <p class="text-h7 text-grey q-my-md">{{ shortDesc }}</p>
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
    <div class="text-grey q-mr-auto q-px-sm" >{{ keyWord }}</div>
    <q-btn flat round color="red" icon="favorite" />
    <q-btn flat round color="primary" icon="share" />
  </q-card-actions>
</q-card>
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
