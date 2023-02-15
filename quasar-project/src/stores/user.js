import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, apiAuth } from '../boot/axios'
import Swal from 'sweetalert2'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const email = ref('')
  const cart = ref(0)
  const role = ref(0)

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
      role.value = data.result.role
      Swal.fire({
        // 其他 Swal 待修改成下面的樣式 by 2/9
        width: '18rem',
        icon: 'success',
        text: '登入成功',
        iconColor: '#C5A768',
        confirmButtonColor: '#2b2b2b',
        allowOutsideClick: false
      })
      this.router.push('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data.message || '發生錯誤'
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
        icon: 'success',
        title: '成功',
        text: '登出成功'
      })
      this.router.push('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data.message || '發生錯誤'
      })
    }
  }

  // 用 token 去換使用者的資料
  const getUser = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      email.value = data.result.email
      role.value = data.result.role
      // cart.value = data.result.cart
    } catch (error) {
      logout()
    }
  }
  async function editCart ({ _id, quantity }) {
    if (token.value.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '請先登入'
      })
      this.router.push('/login')
      return
    }
    try {
      const { data } = await apiAuth.post('/users/cart', { p_id: _id, quantity: parseInt(quantity) })
      cart.value = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '加入購物車成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }
  async function signup (_id) {
    try {
      console.log(_id)
      await apiAuth.post('/orders/' + _id)
      // cart.value = 0
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '報名成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }
  return {
    token, email, role, cart, login, logout, isLogin, isAdmin, getUser, editCart, signup
  }
}, {
  persist: {
    key: 'project',
    paths: ['token']
  }
})
