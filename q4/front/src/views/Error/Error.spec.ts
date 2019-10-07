import { mount } from '@vue/test-utils'
import Component from './index'

describe('Error', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component, {
      stubs: ['router-link']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(Component, {
      stubs: ['router-link']
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
