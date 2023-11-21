import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const router = useRouter()
  const posts = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const token = ref(null)
  const isLogin = computed(() => {
    if (token.value === null) {
      return false
    } else {
      return true
    }
  })

  // DRF에 article 조회 요청을 보내는 action
  const getPosts = function () {
    axios({
      method: 'get',
      url: `${API_URL}/posts/`,
      headers: {Authorization: `Token ${token.value}`}
    })
      .then((res) =>{
        // console.log(res)
        posts.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const signUp = function (payload) {
    const { username, email, password1, password2, nickname, age, money, salary } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, email, password1, password2, nickname, age, money, salary
      }
    })
      .then((res) => {
        console.log(res)
        const password = password1
        logIn({ username, password })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const logIn = function (payload) {
    const { username, password } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username, password
      }
    })
      .then((res) => {
        console.log(res.data)
        token.value = res.data.key
        router.push({ name: 'PostView' })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const logOut = function () {
    axios({
      method: 'post',
      url: `${API_URL}/accounts/logout/`,
    })
      .then((res) => {
        token.value = null
        router.push({ name: 'PostView' })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { posts, API_URL, getPosts, signUp, logIn, token, isLogin, logOut }
}, { persist: true })
