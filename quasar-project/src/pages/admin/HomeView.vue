<template>
  <q-page>
    <q-section>
      <div class="row">
        <div class="col-12">
          <h5>管理首頁</h5>
        </div>
      </div>
    </q-section>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'

const products = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: error?.response?.data.message || '發生錯誤',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
  }
})()
</script>
