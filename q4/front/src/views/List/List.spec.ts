import { mount, createLocalVue } from '@vue/test-utils'
import Component from './index'
import Vuex, { Store } from 'vuex'
import { IBook } from '@/const'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('List', () => {
  let getters
  let store: Store<IBook[]>

  beforeEach(() => {
    getters = {
      getBooks: () => () => [
        {
          author: 'Marcel Proust',
          cover: '01.jpg',
          rating: '9.9',
          slug: 'in-search-of-lost-time',
          synopsis:
            "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
          title: 'In Search of Lost Time',
          upvoted: false,
          upvotes: 1111
        },
        {
          author: 'Miguel de Cervantes',
          cover: '02.jpg',
          rating: '9.8',
          slug: 'don-quixote',
          synopsis:
            'Don Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.\nDon Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.',
          title: 'Don Quixote',
          upvoted: true,
          upvotes: 1022
        }
      ]
    }

    store = new Vuex.Store({
      getters
    })
  })

  test('is a Vue instance', () => {
    const wrapper = mount(Component, {
      stubs: ['router-link'],
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(Component, {
      stubs: ['router-link'],
      store,
      localVue
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
