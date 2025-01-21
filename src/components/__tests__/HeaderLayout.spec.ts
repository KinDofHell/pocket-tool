import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeaderLayout from '../shared/layout/HeaderLayout.vue'
import IconLogo from '../shared/icons/IconLogo.vue'
import SearchLayout from '../shared/layout/SearchLayout.vue'
import MenuLayout from '../shared/layout/MenuLayout.vue'

describe('HeaderLayout', () => {
  it('renders correctly', () => {
    const wrapper = mount(HeaderLayout)

    expect(wrapper.findComponent(IconLogo).exists()).toBe(true)
    expect(wrapper.findComponent(SearchLayout).exists()).toBe(true)
    expect(wrapper.findComponent(MenuLayout).exists()).toBe(true)
  })
})
