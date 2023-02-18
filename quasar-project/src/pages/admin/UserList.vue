<template>
<q-page>
  <div>
    <h5>會員管理</h5>
    <q-table
    style="width:95%"
    :rows="users"
    row-key="name"
    :columns="columns"
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

const users = reactive([])

const columns = [
  {
    name: 'username',
    required: true,
    label: '會員姓名',
    align: 'center',
    field: row => row.name
  },
  {
    name: 'usernickname',
    required: true,
    label: '暱稱',
    align: 'center',
    field: row => row.nickname
  },
  {
    name: 'gender',
    required: true,
    label: '性別',
    align: 'center',
    field: row => row.gender
  },
  {
    name: 'useremail',
    required: true,
    label: '電子信箱',
    align: 'center',
    field: row => row.email
  },
  {
    name: 'userphone',
    required: true,
    label: '聯絡電話',
    align: 'center',
    field: row => row.phone
  },
  {
    name: 'date',
    required: true,
    label: '註冊日期',
    align: 'center',
    field: row => row.date,
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    format: val => `${new Date(val).toLocaleDateString()}`
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/users/allusers')
    users.push(...data.result)
    console.log(users)
    users.reverse()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得資料失敗',
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
