import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import HomeView from '../../views/HomeView.vue'
import App from '../../App.vue'
import WeatherView from '../../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView,
    },
  ],
})

describe('Router', () => {
  beforeEach(async () => {
    await router.push('/')
    await router.isReady()
  })

  it('renders HomeView on default route', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.isReady()

    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })

  it('navigates to WeatherView when /weather is visited', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await router.push('/weather')
    await router.isReady()

    expect(wrapper.findComponent(WeatherView).exists()).toBe(true)
  })
})
