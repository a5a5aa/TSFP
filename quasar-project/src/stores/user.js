import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, apiAuth } from '../boot/axios'
import Swal from 'sweetalert2'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const email = ref('')
  const role = ref(0)
  const nickname = ref('')
  const name = ref('')
  const phone = ref('')
  const gender = ref('')

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === 1
  })

  const isUser = computed(() => {
    return role.value === 0
  })

  const avatar = computed(() => {
    return `https://source.boringavatars.com/bauhaus/256/${email.value}?colors=2B2B2B,BFB4AA,B99555,E1BF77,636363`
  })

  async function login (form) {
    try {
      const { data } = await api.post('/users/login', form)
      token.value = data.result.token
      email.value = data.result.email
      name.value = data.result.name
      nickname.value = data.result.nickname
      phone.value = data.result.phone
      gender.value = data.result.gender
      role.value = data.result.role

      Swal.fire({
        width: '18rem',
        icon: 'success',
        text: '登入成功',
        iconColor: '#C5A768',
        confirmButtonColor: '#2b2b2b'
      })
      if (role.value === 1) {
        this.router.push('/admin/products')
      } else {
        // this.router.push('/')
        this.router.go(-1)
      }
    } catch (error) {
      Swal.fire({
        width: '18rem',
        icon: 'error',
        text: error?.response?.data.message || '發生錯誤',
        iconColor: '#C5A768',
        confirmButtonColor: '#2b2b2b',
        allowOutsideClick: false
      })
    }
  }

  async function logout () {
    try {
      await apiAuth.delete('/users/logout')
      token.value = ''
      email.value = ''
      name.value = ''
      nickname.value = ''
      phone.value = ''
      gender.value = ''
      role.value = 0
      Swal.fire({
        // 其他 Swal 待修改成下面的樣式 by 2/9
        width: '18rem',
        icon: 'success',
        text: '登出成功',
        iconColor: '#C5A768',
        confirmButtonColor: '#2b2b2b'
      })
      this.router.push('/')
    } catch (error) {
      Swal.fire({
        width: '18rem',
        icon: 'error',
        text: error?.response?.data.message || '發生錯誤',
        iconColor: '#C5A768',
        confirmButtonColor: '#2b2b2b',
        allowOutsideClick: false
      })
    }
  }

  // 用 token 去換使用者的資料
  const getUser = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      email.value = data.result.email
      name.value = data.result.name
      nickname.value = data.result.nickname
      phone.value = data.result.phone
      gender.value = data.result.gender
      role.value = data.result.role
      // cart.value = data.result.cart
    } catch (error) {
      logout()
    }
  }
  async function signup (_id) {
    try {
      const { data } = await apiAuth.post('/orders/' + _id)
      console.log(data.result)
      Swal.fire({
        // 其他 Swal 待修改成下面的樣式 by 2/9
        width: '18rem',
        icon: 'success',
        text: '報名成功',
        iconColor: '#C5A768',
        confirmButtonColor: '#2b2b2b',
        allowOutsideClick: false
      })
      this.router.push('/products')
    } catch (error) {
      console.log(error)
      Swal.fire({
        width: '18rem',
        icon: 'error',
        text: error?.response?.data.message || '發生錯誤',
        iconColor: '#C5A768',
        confirmButtonColor: '#2b2b2b',
        allowOutsideClick: false
      })
    }
  }
  return {
    token, email, nickname, name, phone, gender, role, login, logout, isLogin, isAdmin, isUser, getUser, signup, avatar
  }
}, {
  persist: {
    key: 'project',
    paths: ['token']
  }
})
