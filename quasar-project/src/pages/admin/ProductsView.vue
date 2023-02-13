<template>
<div>
  <h5>活動管理</h5>
  <div class="row">
    <div class="col-12">
      <q-btn class="bg-info text-white" @click="openDialog(-1)">新增活動</q-btn>
    </div>
    <div class="col-12">
      <q-table>
        <div>
          <tr>
            <th>圖片</th>
            <th>名稱</th>
            <th>管理</th>
          </tr>
        </div>
        <div>
          <tr v-for="(product, idx) in products" :key="product._id">
            <td>
              <q-img :src="product.image" :aspect-ratio="1" :width="200"></q-img>
            </td>
            <td>{{ product.name }}</td>
            <td>
              <q-btn class="text-primary" icon="mdi-pencil" variant="text" @click="openDialog(idx)"></q-btn>
            </td>
          </tr>
        </div>
      </q-table>
    </div>
  </div>
  <!-- 新增活動表單 -->
  <q-dialog class="q-pa-md q-gutter-sm row" v-model="form.dialog">
    <q-form style="width:700px;" v-model="form.valid" @submit.prevent="submit">
      <q-card class="row q-pa-xl">
        <q-card-title class="col-12">
          <h5>{{ form._id.length > 0 ? '編輯活動' : '新增活動' }}</h5>
        </q-card-title>
        <q-card-section class="col-12 row justify-between">
          <q-input  stack-label class="col-5" v-model="form.name" label="活動名稱" type="text" color="primary" :rules="[rules.required]"></q-input>
          <q-select stack-label class="col-3" v-model="form.category" :options="categories" :rules="[rules.required]" label="分類"></q-select>
          <q-input stack-label class="col-3" v-model="form.price" label="報名費" type="number" prefix="$" color="primary" :rules="[rules.required, rules.price]"></q-input>
          <q-input stack-label class="col-3" v-model="form.date"  label="活動日期" type="date" color="primary" :rules="[rules.required]"></q-input>
          <q-input stack-label class="col-3" v-model="form.starttime"  label="開始時間" type="time" color="primary" :rules="[rules.required]"></q-input>
          <q-input stack-label class="col-3" v-model="form.endedtime"  label="結束時間" type="time" color="primary" :rules="[rules.required]"></q-input>
          <q-input stack-label filled class="col-12" v-model="form.description" label="活動說明" type="textarea" auto-grow="auto-grow" :rules="[rules.required]"></q-input>
          <q-checkbox stack-label class="col-12" v-model="form.sell" label="上架" color="primary" @click="checkbox"></q-checkbox>
        </q-card-section>
        <q-card-actions class="q-mt-md">
          <q-spacer></q-spacer>
          <q-btn :disabled="form.loading" color="grey" @click="form.dialog = false">取消</q-btn>
          <q-btn :disabled="form.loading" color="warning" type="submit">送出</q-btn>
        </q-card-actions>
      </q-card>
    </q-form>
  </q-dialog>
</div>
</template>

<script setup>
import { apiAuth } from '../../boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const categories = ['心靈勵志', '自我成長', '生活風格', '其他']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}

const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  date: '',
  starttime: '',
  endedtime: '',
  category: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  valid: false,
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.date = ''
    form.starttime = ''
    form.endedtime = ''
    form.price = 0
    form.description = ''
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
  if (!form.valid) return

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
  fd.append('image', form.image)
  fd.append('sell', form.sell)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
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
    const { data } = await apiAuth.get('/products/all')
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
