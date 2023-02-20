<template>
<q-page class="row justify-center" style="max-width: 1920px; margin:auto;">
  <div class="item_bar q-pt-md col-4" style="width: 200px">
    <q-list bordered separator class="shadow-1">
      <q-item clickable v-ripple>
        <q-item-section>
          報名查詢
          <q-item-label>Activity query</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          基本資料
          <q-item-label>Basic information</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          客服中心
          <q-item-label>Service center</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <div class="col-8 q-pa-xl row justify-center">
    <h5 class="q-mb-lg col-12">報名查詢</h5>
    <q-table
    style="max-width:90%;"
    :rows="orders"
    row-key="name"
    :columns="columns"
    class="text-center col-12">
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
