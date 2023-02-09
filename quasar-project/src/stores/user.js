import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, apiAuth } from '../boot/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const email = ref('')
  const role = ref(0)
  const router = useRouter()

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === 1
  })

  const login = async (form) => {
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
        confirmButtonColor: '#2b2b2b'
        // allowOutsideClick: false
      })
      router.push('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data.message || '發生錯誤'
      })
    }
  }

  const logout = async () => {
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
      router.push('/')
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
  return {
    token, email, role, login, logout, isLogin, isAdmin, getUser
  }
}, {
  persist: {
    key: 'project',
    paths: ['token']
  }
})
