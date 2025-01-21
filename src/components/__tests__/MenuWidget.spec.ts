import { nextTick } from 'vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconNote from '../shared/icons/IconNote.vue'
import IconNews from '../shared/icons/IconNews.vue'
import IconQuote from '../shared/icons/IconQuote.vue'
import IconPicture from '../shared/icons/IconPicture.vue'
import MenuWidget from '../shared/widgets/MenuWidget.vue'

describe('MenuWidget', () => {
  it('does not show the card initially', () => {
    const wrapper = mount(MenuWidget)
    expect(wrapper.find('.menu-card').exists()).toBe(false)
  })

  it('shows the card after the timeout', async () => {
    const wrapper = mount(MenuWidget)

    expect(wrapper.find('.menu-card').exists()).toBe(false)

    await new Promise((resolve) => setTimeout(resolve, 0))
    await nextTick()

    expect(wrapper.find('.menu-card').exists()).toBe(true)
  })

  it('renders the correct child components', async () => {
    const wrapper = mount(MenuWidget)

    await new Promise((resolve) => setTimeout(resolve, 0))
    await nextTick()

    expect(wrapper.findComponent(IconNews).exists()).toBe(true)
    expect(wrapper.findComponent(IconNote).exists()).toBe(true)
    expect(wrapper.findComponent(IconQuote).exists()).toBe(true)
    expect(wrapper.findComponent(IconPicture).exists()).toBe(true)
  })

  it('renders the correct dynamic content', async () => {
    const wrapper = mount(MenuWidget)

    await new Promise((resolve) => setTimeout(resolve, 0))
    await nextTick()

    expect(wrapper.text()).toContain('News')
    expect(wrapper.text()).toContain('Notes')
    expect(wrapper.text()).toContain('Quotes')
    expect(wrapper.text()).toContain('Pictures')
  })
})
