import Vue from 'vue'
import { mapGetters } from 'vuex'
import Component from 'vue-class-component'
import BookCard from '@/components/BookCard'
import SearchInput from '@/components/SearchInput'
import { IBook } from '@/const'

@Component({
  components: {
    BookCard,
    SearchInput
  },
  computed: {
    ...mapGetters(['getBooks'])
  }
})
export default class List extends Vue {
  private getBooks: ((query: string) => IBook[]) | undefined
  private searchField: string = ''

  private data() {
    return {
      search: ''
    }
  }

  private getFilteredBooks() {
    return this.getBooks ? this.getBooks(this.searchField) : []
  }
}
