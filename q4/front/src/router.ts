import Vue from 'vue'
import Router, { Route } from 'vue-router'
import List from '@/views/List'
import Book from '@/views/Book'
import store from '@/store/'
import axios, { AxiosError, AxiosResponse } from 'axios'
import Error from '@/views/Error'
import { API_URL, IBook, IBooksResponse } from '@/const'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List,
      beforeEnter: (to: Route, from: Route, next: any) => {
        axios
          .get(`${API_URL}books`)
          .then((resp: AxiosResponse<IBooksResponse>) => {
            if (resp.status === 200) {
              store
                .dispatch('loadBooks', resp.data.books)
                .then(() => next())
                .catch(() => Promise.reject())
            }
          })
          .catch(() => {
            next({ path: '/error' })
            return Promise.reject()
          })
      }
    },
    {
      path: '/book/:slug',
      name: 'book',
      component: Book,
      beforeEnter: (to, from: Route, next) => {
        const slug = to.params.slug

        if (!store.getters.getBook(slug)) {
          axios
            .get(`${API_URL}books/${slug}`)
            .then((resp: AxiosResponse<IBook>) => {
              if (resp.status === 200) {
                store
                  .dispatch('loadBooks', [resp.data])
                  .then(() => next())
                  .catch(() => Promise.reject())
              }
            })
            .catch(() => {
              next({ path: '/error' })
              return Promise.reject()
            })
        } else {
          next()
        }
      }
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
