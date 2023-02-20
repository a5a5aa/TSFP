<template>
<q-page>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>報名查詢</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class=section_1>
    <h5>活動報名</h5>
    <q-table
    style="width:1024px;"
    :rows="orders"
    row-key="name"
    :columns="columns"
    class="text-center">
    <template v-slot:body-cell-image='props'>
      <q-td>
        <q-img :src="props.row.p_id.image" width="240px" height="135px"></q-img>
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
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    format: val => `${new Date(val).toLocaleDateString()}`
  },
  {
    name: 'starttime',
    required: true,
    label: '開始時間',
    align: 'center',
    field: row => row.p_id.starttime,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'date',
    required: true,
    label: '報名日期',
    align: 'center',
    field: row => row.date,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    format: val => `${new Date(val).toLocaleDateString()}`
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result)
    console.log(orders)
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
