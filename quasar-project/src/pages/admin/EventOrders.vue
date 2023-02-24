<template>
<q-page>
  <div>
    <h5>活動報名管理</h5>
    <q-table
    style="width:95%;"
    :rows="orders"
    row-key="index"
    :columns="columns"
    class="text-center"
    >
    <template v-slot:body-cell-image='props'>
      <q-td>
        <q-img :src="props.row.p_id.image" width="120px" height="67.5px"></q-img>
      </q-td>
    </template>
    </q-table>
  </div>
  <div>
    <h5>報名資料</h5>
    <q-table
    style="width:95%;"
    :rows="orders"
    row-key="index"
    :columns="columns2"
    class="text-center"
    >
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
    name: 'category',
    required: true,
    label: '分類',
    align: 'center',
    field: row => row.p_id.category,
    sortable: true
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
]

const columns2 = [
  {
    name: 'date',
    required: true,
    label: '報名日期',
    align: 'center',
    field: 'date',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    format: val => `${new Date(val).toLocaleDateString()}`
  },
  {
    name: 'username',
    required: true,
    label: '會員姓名',
    align: 'center',
    field: row => row.u_id.name
  },
  {
    name: 'gender',
    required: true,
    label: '性別',
    align: 'center',
    field: row => row.u_id.gender
  },
  {
    name: 'useremail',
    required: true,
    label: '電子信箱',
    align: 'center',
    field: row => row.u_id.email
  },
  {
    name: 'userphone',
    required: true,
    label: '聯絡電話',
    align: 'center',
    field: row => row.u_id.phone
  },
  {
    name: 'ordernumber',
    required: true,
    label: '訂單編號',
    align: 'center',
    field: row => row._id
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/eventorders/' + '63ebad46e956723f0040826f')
    orders.push(...data.result)
    console.log(orders)
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: '取得訂單失敗',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
  }
})()
</script>
