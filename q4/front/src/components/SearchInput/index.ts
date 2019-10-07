import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class SearchInput extends Vue {
  @Prop() public value: string = ''
}
