import { ref } from 'vue'

const isLoading = ref(false)

export function useLoader() {
  let timeoutId: number

  return {
    isLoading,
    showLoader: (delay = 300) => {
      timeoutId = setTimeout(() => (isLoading.value = true), delay)
    },
    hideLoader: () => {
      clearTimeout(timeoutId)
      isLoading.value = false
    },
  }
}
