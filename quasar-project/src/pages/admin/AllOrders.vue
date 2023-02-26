<template>
<q-page>
  <div class="q-px-lg q-py-xl row justify-between" style="width: 100%">
    <h5 class="col-6">訂單管理</h5>
    <q-input dense ref="filterRef" filled v-model="filter" label="請輸入訂單編號或電子信箱" style="width: 300px;">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:append>
        <q-icon v-if="filter !== ''" name="clear" class="cursor-pointer" @click="resetFilter" />
      </template>
    </q-input>
    <q-table
    :filter="filter"
    :rows="orders"
    row-key="name"
    :columns="columns"
    class="text-center col-12 q-mt-md"
    >
    </q-table>
  </div>
</q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'
const orders = reactive([])
const filter = ref('')
const filterRef = ref('')
const columns = [
  {
    name: 'date',
    required: true,
    label: '訂單日期',
    align: 'center',
    field: row => row.date,
    sortable: true,
    format: val => `${new Date(val).toLocaleDateString()}`
  },
  {
    name: 'ordernumber',
    required: true,
    label: '訂單編號',
    align: 'center',
    field: row => row._id
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
    name: 'name',
    required: true,
    label: '活動名稱',
    align: 'center',
    field: row => row.p_id.name
  }
]
const resetFilter = () => {
  filter.value = ''
  filterRef.value.focus()
};

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/allorders')
    orders.push(...data.result)
    orders.reverse()
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
