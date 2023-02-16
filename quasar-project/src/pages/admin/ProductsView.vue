<template>
<q-page>
  <div class="q-pa-xl row justify-center">
    <div>
      <h5>活動管理</h5>
      <div class="text-right q-mb-md">
        <q-btn icon="add" class="bg-warning text-white" @click="openDialog(-1)">新增活動</q-btn>
      </div>
      <q-table style="width:1024px;" :rows="products" row-key="_id" :columns="columns" class="text-center">
        <template v-slot:body-cell-image='props'>
          <q-td>
            <q-img :src="props.row.image" width="240px" height="135px"></q-img>
          </q-td>
        </template>
        <template v-slot:body-cell-status="props">
          <q-td class="text-warning">
            <q-btn round icon="edit" class="bg-grey" @click="openDialog(props.row._id)"></q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <!-- 新增活動表單 -->
    <q-dialog class="q-pa-md q-gutter-sm row" no-shake persistent v-model="form.dialog">
      <q-card class="row q-pa-xl">
        <q-form style="width:700px;" @submit.prevent="submit">
          <q-card-title class="col-12">
            <h5>{{ form._id.length > 0 ? '編輯活動' : '新增活動' }}</h5>
          </q-card-title>
          <q-card-section class="col-12 row justify-between">
            <q-input  stack-label class="col-7" v-model="form.name" label="活動名稱" type="text" color="primary" :rules="[rules.required]"></q-input>
            <q-select stack-label class="col-4" v-model="form.category" :options="categories" :rules="[rules.required]" label="分類"></q-select>
            <q-input stack-label class="col-4" v-model="form.date"  label="活動日期" type="date" color="primary" :rules="[rules.required]"></q-input>
            <q-input stack-label class="col-3" v-model="form.starttime" label="開始時間" type="time" color="primary" :rules="[rules.required]"></q-input>
            <q-input stack-label class="col-3" v-model="form.endedtime" label="結束時間" type="time" color="primary" :rules="[rules.required]"></q-input>
            <q-input stack-label class="col-3" v-model="form.price" label="報名費" type="number" prefix="$" color="primary" :rules="[rules.required, rules.price]"></q-input>
            <q-input stack-label class="col-3" v-model="form.keyWord" label="關鍵字" type="text" color="primary" :rules="[rules.required]"></q-input>
            <q-file
              stack-label
              class="col-4"
              style="max-width: 300px"
              v-model="form.image"
              label="上傳圖片"
              accept=".jpg, image/*"
              @rejected="onRejected"
            />
            <q-input stack-label filled class="col-12 q-mt-lg" v-model="form.description" label="活動說明" type="textarea" auto-grow="auto-grow" :rules="[rules.required]"></q-input>
            <q-checkbox stack-label class="col-12" v-model="form.sell" label="上架" color="primary" :rules="[rules.required]" @click="checkbox"></q-checkbox>
          </q-card-section>
          <q-card-actions class="q-mt-md">
            <q-spacer></q-spacer>
            <q-btn :disabled="form.loading" color="grey" @click="form.dialog = false">取消</q-btn>
            <q-btn :disabled="form.loading" color="warning" type="submit">送出</q-btn>
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</q-page>
</template>

<script setup>
import { api, apiAuth } from '../../boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const categories = ['心靈勵志', '生活風格', '藝文', '名人講堂', '職涯', '體驗', '其他']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}

const columns = [
  {
    name: 'image',
    required: true,
    label: '活動封面',
    align: 'center',
    field: 'image'
  },
  {
    name: 'name',
    required: true,
    label: '活動名稱',
    align: 'center',
    field: 'name',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'date',
    required: true,
    label: '活動日期',
    align: 'center',
    field: 'date',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    format: val => `${new Date(val).toLocaleDateString()}`
  },
  {
    name: 'starttime',
    required: true,
    label: '開始時間',
    align: 'center',
    field: 'starttime',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'category',
    required: true,
    label: '分類',
    align: 'center',
    field: 'category',
    sortable: true
  },
  {
    name: 'status',
    label: '編輯',
    align: 'center',
    required: true
  }
]

const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  date: '',
  starttime: '',
  endedtime: '',
  category: '',
  keyWord: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  valid: false,
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (_id) => {
  const idx = products.findIndex((product) => product._id === _id)
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.date = ''
    form.starttime = ''
    form.endedtime = ''
    form.price = 0
    form.description = ''
    form.keyWord = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.valid = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.date = products[idx].date
    form.starttime = products[idx].starttime
    form.endedtime = products[idx].endedtime
    form.price = products[idx].price
    form.description = products[idx].description
    form.keyWord = products[idx].keyWord
    form.image = undefined
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.valid = false
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const submit = async () => {
  // if (!form.valid) return
  console.log(form)

  form.loading = true

  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('date', form.date)
  fd.append('starttime', form.starttime)
  fd.append('endedtime', form.endedtime)
  fd.append('category', form.category)
  fd.append('price', form.price)
  fd.append('description', form.description)
  fd.append('keyWord', form.keyWord)
  fd.append('image', form.image)
  fd.append('sell', form.sell)

  try {
    if (form._id.length === 0 && form.sell !== false) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      console.log(data)
      products[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }

  form.loading = false
}

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

</script>

<style>
.swal2-container {
  z-index: 10000;
}
</style>
