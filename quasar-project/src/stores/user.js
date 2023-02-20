import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, apiAuth } from '../boot/axios'
import Swal from 'sweetalert2'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const email = ref('')
  const cart = ref(0)
  const role = ref(0)
  const nickname = ref('')

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === 1
  })

  async function login (form) {
    try {
      const { data } = await api.post('/users/login', form)
      token.value = data.result.token
      email.value = data.result.email
      nickname.value = data.result.nickname
      role.value = data.result.role

      Swal.fire({
        width: '18rem',
        icon: 'success',
        text: '登入成功',
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

  async function logout () {
    try {
      await apiAuth.delete('/users/logout')
      token.value = ''
      email.value = ''
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
      nickname.value = data.result.nickname
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
  return {
    token, email, nickname, role, cart, login, logout, isLogin, isAdmin, getUser, signup
  }
}, {
  persist: {
    key: 'project',
    paths: ['token']
  }
})
