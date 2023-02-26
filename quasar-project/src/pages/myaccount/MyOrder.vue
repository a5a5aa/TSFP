<template>
<q-page>
  <div>
    <h5 class="q-mb-lg col-12">
    <q-icon name="fa-solid fa-clipboard-list" size="1.5rem" class="q-mr-sm"></q-icon>
    報名查詢</h5>
    <q-table
    style="min-width: 768px;"
    :rows="orders"
    row-key="name"
    :columns="columns"
    class="text-center">
    <template v-slot:body-cell-image='props'>
      <q-td>
        <q-img :src="props.row.p_id.image" width="160px" height="90px"></q-img>
      </q-td>
    </template>
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
    name: 'image',
    required: true,
    label: '活動封面',
    align: 'center'
  },
  {
    name: 'name',
    required: true,
    label: '活動名稱',
    align: 'center',
    field: row => row.p_id.name
  },
  {
    name: 'date',
    required: true,
    label: '活動日期',
    align: 'center',
    field: row => row.p_id.date,
    sortable: true,
    format: val => `${new Date(val).toLocaleDateString()}`
  },
  {
    name: 'starttime',
    required: true,
    label: '開始時間',
    align: 'center',
    field: row => row.p_id.starttime,
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: '報名日期',
    align: 'center',
    field: row => row.date,
    sortable: true,
    format: val => `${new Date(val).toLocaleDateString()}`
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result)
    orders.reverse()
    console.log(orders)
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: '取得訂單失敗',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b'
    })
  }
})()
</script>

<style>
.swal2-container {
  z-index: 10000;
}
</style>
