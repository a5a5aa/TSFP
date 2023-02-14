<template>
<q-card class="my-card col-md-5" flat bordered>
  <q-card-section horizontal>
    <q-card-section class="q-pt-xs">
      <span class="bg-warning text-overline text-white rounded-borders q-px-sm q-py-xs">品味</span>
      <div class="text-h5 q-mt-sm q-mb-xs">{{ name }}</div>
      <div class="text-caption text-grey">{{ description }}</div>
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
    <div class="text-grey q-mr-auto" >{{ keyWord }}</div>
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
  name: {
    type: String,
    default: ''
  },
  description: {
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
