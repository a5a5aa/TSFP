<template>
<q-page>
  <div class="q-px-lg q-py-xl row justify-between" style="width: 100%">
    <h5 class="col-6">會員帳戶</h5>
    <q-table
    :rows="users"
    row-key="name"
    :columns="columns"
    class="text-center col-12 q-mt-md"
    >
      <template v-slot:body-cell-photo='props'>
        <q-td>
          <q-img :src="`https://source.boringavatars.com/bauhaus/256/${props.row.email}?colors=2B2B2B,BFB4AA,B99555,E1BF77,636363`" width="50px" height="50px"></q-img>
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

const users = reactive([])

const columns = [
  {
    name: 'photo',
    required: true,
    label: 'PHOTO',
    align: 'center'
  },
  {
    name: 'username',
    required: true,
    label: '姓名',
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
      width: '18rem',
      icon: 'error',
      text: '取得資料失敗',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
  }
})()
</script>
