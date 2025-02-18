import { mount, createLocalVue } from '@vue/test-utils'
import Component from './index'
import Vuex, { Store } from 'vuex'
import { IBook } from '@/const'

const localVue = createLocalVue()

localVue.use(Vuex)

const $route = {
  params: {
    slug: 'test'
  }
}

describe('Book', () => {
  let getters
  let store: Store<IBook[]>

  beforeEach(() => {
    getters = {
      getBook: () => () => ({
        author: 'Marcel Proust',
        cover: '01.jpg',
        rating: '9.9',
        slug: 'in-search-of-lost-time',
        synopsis:
          "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
        title: 'In Search of Lost Time',
        upvoted: false,
        upvotes: 1111
      })
    }

    store = new Vuex.Store({
      getters
    })
  })

  test('is a Vue instance', () => {
    const wrapper = mount(Component, {
      mocks: {
        $route
      },
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(Component, {
      mocks: {
        $route
      },
      store,
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
