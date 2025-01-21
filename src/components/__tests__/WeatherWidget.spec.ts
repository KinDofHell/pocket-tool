import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WeatherWidget from '../shared/widgets/WeatherWidget.vue'
import IconCloudy from '../shared/icons/IconCloudy.vue'
import IconHumidity from '../shared/icons/IconHumidity.vue'
import IconWind from '../shared/icons/IconWind.vue'

describe('WeatherWidget', () => {
  it('does not show the card initially', () => {
    const wrapper = mount(WeatherWidget)
    expect(wrapper.findComponent({ name: 'RouterLink' }).exists()).toBe(false)
  })

  it('renders the correct child components', async () => {
    const wrapper = mount(WeatherWidget)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    expect(wrapper.findComponent(IconCloudy).exists()).toBe(true)
    expect(wrapper.findComponent(IconHumidity).exists()).toBe(true)
    expect(wrapper.findComponent(IconWind).exists()).toBe(true)
  })

  it('renders dynamic content correctly', async () => {
    const wrapper = mount(WeatherWidget)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    expect(wrapper.text()).toContain('Zhytomyr')
    expect(wrapper.text()).toContain('-8°C')
    expect(wrapper.text()).toContain('95%')
    expect(wrapper.text()).toContain('12 km/h')
  })
})
