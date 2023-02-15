<template>
<q-page>
  <div>
    <h5>活動報名</h5>
    <q-table
    style="width:1024px;"
    :rows="orders"
    row-key="name"
    :columns="columns"
    class="text-center">
    </q-table>
  </div>
</q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const columns = [
  {
    name: 'p_id',
    required: true,
    label: '活動編號',
    align: 'center',
    field: 'p_id'
  },
  {
    name: 'date',
    required: true,
    label: '報名日期',
    align: 'center',
    field: 'date',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    format: val => `${new Date(val).toLocaleDateString()}`
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗',
      allowOutsideClick: false
    })
  }
})()
</script>

<style>
.swal2-container {
  z-index: 10000;
}
</style>
