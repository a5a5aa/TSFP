<template>
  <div class="example d-flex flex-column gap-16">
    <h1 class="example-title">Base component usage</h1>
    <h2>Just component</h2>
    <div class="example__container size-240">
      <v-image-input v-model="image1" removable />
    </div>
    <h2>Removable component</h2>
    <div class="example__container size-120">
      <v-image-input v-model="image2" removable />
    </div>
  </div>
</template>

<script>

import ImageInput from './ImageInput.vue'

export default {
  components: {
    ImageInput
  }
}
</script>
