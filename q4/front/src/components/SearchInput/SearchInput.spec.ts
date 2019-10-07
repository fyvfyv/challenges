import { mount } from '@vue/test-utils'
import Component from './index'

describe('SearchInput', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component, {
      propsData: {
        value: ''
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(Component, {
      propsData: {
        value: ''
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
