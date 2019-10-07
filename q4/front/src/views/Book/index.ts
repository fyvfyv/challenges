import Vue from 'vue'
import Component from 'vue-class-component'
import { mapGetters } from 'vuex'
import { IBook } from '@/const'

@Component({
  computed: {
    ...mapGetters(['getBook'])
  }
})
export default class Book extends Vue {
  public getBook: ((slug: string) => IBook | undefined) | undefined
  private book: IBook | undefined = undefined

  public created () {
    this.book = this.getBook && this.getBook(this.$route.params.slug)
  }
}
