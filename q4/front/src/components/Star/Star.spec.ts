import { mount } from '@vue/test-utils'
import Component from './index'

describe('Star', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component, {
      propsData: {
        isFilled: false
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders grey colored correctly', () => {
    const wrapper = mount(Component, {
      propsData: {
        isFilled: false
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test('renders yellow colored correctly', () => {
    const wrapper = mount(Component, {
      propsData: {
        isFilled: true
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
