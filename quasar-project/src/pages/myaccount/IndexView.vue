<template>
  <q-page>
    <div>
      <h5 class="q-mb-lg col-12">
      <q-icon name="fa-solid fa-clipboard-list" size="1.5rem" class="q-mr-sm"></q-icon>報名查詢</h5>
      <q-table
        :rows="orders"
        row-key="name"
        :columns="columns"
        style="min-width: 768px;"
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
    name: 'date',
    required: true,
    label: '報名日期',
    align: 'center',
    field: row => row.date,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    format: val => `${new Date(val).toLocaleDateString()}`
  },
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
