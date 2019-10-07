import Vue from 'vue'
import Component from 'vue-class-component'
import { Emit, Prop } from 'vue-property-decorator'
import { IBook, MAX_SYNOPSIS_LENGTH } from '@/const'

@Component
export default class BookCard extends Vue {
  @Prop() private book!: IBook
  @Prop() private index!: number

  @Emit()
  private getShortDescription() {
    return this.book.synopsis.length > MAX_SYNOPSIS_LENGTH
      ? `${this.book.synopsis.slice(0, MAX_SYNOPSIS_LENGTH)}...`
      : this.book.synopsis
  }
}
