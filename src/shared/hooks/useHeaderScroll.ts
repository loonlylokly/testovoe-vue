// useHeaderScroll.ts
import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

interface HeaderScrollOptions {
  getMobileHeader?: () => HTMLElement | null
}
export function useHeaderScroll(options?: HeaderScrollOptions) {
  const headerRef: Ref<HTMLElement | null> = ref(null)
  const lastScrollTop = ref(0)

  const handleScroll = (): void => {
    const scrollTop: number = window.scrollY || document.documentElement.scrollTop
    // Безопасное получение мобильного хедера
    const mobileHeader = options?.getMobileHeader?.()
    const mobileHeaderHasShowClass = mobileHeader?.classList?.contains('show') ?? false

    if (
      scrollTop > lastScrollTop.value
      && !mobileHeaderHasShowClass
      && window.scrollY > 50
    ) {
      headerRef.value?.classList.add('header__hidden')
    }
    else {
      headerRef.value?.classList.remove('header__hidden')
    }

    lastScrollTop.value = scrollTop

    if (window.scrollY > 50) {
      headerRef.value?.classList.add('sticky')
    }
    else {
      headerRef.value?.classList.remove('sticky')
    }
  }

  onMounted(() => {
    if (!headerRef.value) {
      headerRef.value = document.querySelector('header')
    }
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    headerRef,
  }
}
