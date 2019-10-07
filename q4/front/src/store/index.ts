import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import { IBook } from '@/const'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const initialState: IBook[] = []

const getters = {
  getBooks: (state: IBook[]) => (query: string = ''): IBook[] => {
    const optQuery = query.trim().toLowerCase()
    return query
      ? state.filter(
          (book: IBook) => book.title.toLowerCase().includes(optQuery) || book.synopsis.toLowerCase().includes(optQuery)
        )
      : state
  },
  getBook: (state: IBook[]) => (slug: string): IBook | undefined => {
    return state.find((book: IBook) => book.slug === slug)
  }
}

const actions = {
  loadBooks({ commit }: ActionContext<IBook[], IBook[]>, books: IBook[]) {
    commit('loadBooks', books)
  }
}

const mutations = {
  loadBooks(state: IBook[], books: IBook[]) {
    state.push(...books)
  }
}

export default new Vuex.Store({
  strict: debug,
  state: initialState,
  getters,
  actions,
  mutations
})
