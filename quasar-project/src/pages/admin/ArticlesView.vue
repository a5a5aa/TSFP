<template>
<q-page>
  <div class="q-px-lg q-py-xl row justify-between" style="width: 100%">
    <h5 class="col-8">文章管理</h5>
    <q-btn icon="add" class="bg-warning text-white text-right q-mb-md" @click="openDialog(-1)">新增文章</q-btn>
    <q-table
    :rows="articles"
    row-key="_id"
    :columns="columns"
    class="article_table text-center col-12">
      <template v-slot:body-cell-image='props'>
        <q-td>
          <q-img :src="props.row.image" width="160px" height="90px"></q-img>
        </q-td>
      </template>

      <template v-slot:body-cell-status="props">
        <q-td class="text-warning">
          <q-btn round icon="edit" flat @click="openDialog(props.row._id)"></q-btn>
        </q-td>
      </template>
    </q-table>
    <!-- 新增文章表單 -->
    <q-dialog class="q-pa-md q-gutter-sm row" no-shake persistent v-model="form.dialog">
      <q-card class="row q-pa-xl">
        <q-form style="width:1000px;" @submit.prevent="submit">
          <q-card-title class="col-12">
            <h5>{{ form._id.length > 0 ? '編輯文章' : '新增文章' }}</h5>
          </q-card-title>
          <q-card-section class="col-12 row justify-between">
            <q-input  stack-label class="col-12" v-model="form.title" label="文章標題" type="text" color="primary" :rules="[rules.required]"></q-input>
            <q-input  stack-label class="col-12" v-model="form.shortDesc" label="簡短說明" type="text" color="primary" :rules="[rules.required]"></q-input>
            <q-input stack-label class="col-12" v-model="form.keyWord" label="關鍵字" type="text" color="primary" :rules="[rules.required]"></q-input>
            <q-select stack-label class="col-4" v-model="form.category" :options="categories" :rules="[rules.required]" label="分類"></q-select>
            <q-file
              stack-label
              class="col-6"
              style="max-width: 300px"
              v-model="form.image"
              label="上傳圖片"
              accept=".jpg, image/*"
              @rejected="onRejected"
            />
            <q-input autogrow stack-label filled class="col-12 q-mt-lg" v-model="form.articleText" label="文章內容" type="textarea" auto-grow="auto-grow" :rules="[rules.required]"></q-input>
            <q-checkbox stack-label class="col-12" v-model="form.upload" label="發佈" color="primary" :rules="[rules.required]" @click="checkbox"></q-checkbox>
          </q-card-section>
          <q-card-actions class="q-mt-md">
            <q-spacer></q-spacer>
            <q-btn :disabled="form.loading" color="grey" @click="form.dialog = false">取消</q-btn>
            <q-btn :disabled="form.loading" color="warning" type="submit">發佈</q-btn>
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

const categories = ['心靈', '自我成長', '品味生活', '藝文', '職場', '人際', '趨勢']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}

const columns = [
  {
    name: 'date',
    required: true,
    label: '發佈日期',
    align: 'center',
    field: row => row.date,
    sortable: true,
    format: val => `${new Date(val).toLocaleDateString()}`
  },
  {
    name: 'image',
    required: true,
    label: '圖片',
    align: 'center',
    field: 'image'
  },
  {
    name: 'title',
    required: true,
    label: '文章標題',
    align: 'center',
    field: 'title',
    sortable: true
  },
  {
    name: 'shortDesc',
    required: true,
    label: '簡短說明',
    align: 'center',
    field: 'shortDesc'
  },
  {
    name: 'articleText',
    required: true,
    label: '文章內容',
    align: 'center',
    field: 'articleText'
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

const articles = reactive([])
const form = reactive({
  _id: '',
  title: '',
  articleText: '',
  shortDesc: '',
  category: '',
  keyWord: '',
  price: 0,
  image: undefined,
  upload: false,
  valid: false,
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (_id) => {
  const idx = articles.findIndex((article) => article._id === _id)
  if (idx === -1) {
    form._id = ''
    form.title = ''
    form.shortDesc = ''
    form.articleText = ''
    form.keyWord = ''
    form.image = undefined
    form.upload = false
    form.category = ''
    form.valid = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = articles[idx]._id
    form.title = articles[idx].title
    form.articleText = articles[idx].articleText
    form.shortDesc = articles[idx].shortDesc
    form.keyWord = articles[idx].keyWord
    form.image = undefined
    form.upload = articles[idx].upload
    form.category = articles[idx].category
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
  fd.append('title', form.title)
  fd.append('shortDesc', form.shortDesc)
  fd.append('articleText', form.articleText)
  fd.append('category', form.category)
  fd.append('keyWord', form.keyWord)
  fd.append('image', form.image)
  fd.append('upload', form.upload)

  try {
    if (form._id.length === 0) {
      if (form.upload !== false) {
        const { data } = await apiAuth.post('/articles', fd)
        articles.push(data.result)
        Swal.fire({
          width: '18rem',
          icon: 'success',
          text: '發佈成功',
          iconColor: '#C5A768',
          confirmButtonColor: '#2b2b2b',
          allowOutsideClick: false
        })
        form.dialog = false
      } else {
        Swal.fire({
          width: '18rem',
          icon: 'info',
          text: '請確認發佈',
          iconColor: '#C5A768',
          confirmButtonColor: '#2b2b2b',
          allowOutsideClick: false
        })
      }
    } else {
      const { data } = await apiAuth.patch('/articles/' + form._id, fd)
      console.log(data)
      articles[form.idx] = data.result
      Swal.fire({
        width: '18rem',
        icon: 'success',
        text: '編輯成功',
        iconColor: '#C5A768',
        confirmButtonColor: '#2b2b2b',
        allowOutsideClick: false
      })
      form.dialog = false
    }
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: error?.response?.data?.message || '發生錯誤',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
  }

  form.loading = false
}

(async () => {
  try {
    const { data } = await api.get('/articles')
    articles.push(...data.result)
    articles.reverse()
  } catch (error) {
    Swal.fire({
      width: '18rem',
      icon: 'error',
      text: error?.response?.data?.message || '發生錯誤',
      iconColor: '#C5A768',
      confirmButtonColor: '#2b2b2b',
      allowOutsideClick: false
    })
  }
})()

</script>

<style lang="scss">

.swal2-container {
  z-index: 10000;
}

.article_table{
  td:nth-child(3),
  td:nth-child(4) {
    max-width: 300px;
    overflow: scroll;
    padding: 0 30px;
  }
  td:nth-child(5) {
    max-width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 30px;
  }
}
</style>
