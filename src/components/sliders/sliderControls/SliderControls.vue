<script setup lang="ts">
import IconSprite from '@/components/ui/icons/IconSprite.vue'

const props = withDefaults(
  defineProps<{
    variant?: 'light' | 'dark'
    btnPrevId?: string
    btnNextId?: string
  }>(),
  {
    variant: 'light',
    btnPrevId: '',
    btnNextId: '',
  },
)
</script>

<template>
  <div :class="`slider-controls ${props.variant}`">
    <button :id="props.btnPrevId" class="slider-controls__btn prev">
      <IconSprite name="arrow-md" />
    </button>
    <button :id="props.btnNextId" class="slider-controls__btn next">
      <IconSprite name="arrow-md" />
    </button>
  </div>
</template>

<style lang="scss">
@use '@/shared/styles/modules' as *;

.slider-controls {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0.1rem;
    width: 0.1rem;
    height: 1rem;
    background: var(--stroke-light-15, rgba(255, 255, 255, 0.15));
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.1rem;
    width: 0.1rem;
    height: 1rem;
    background: var(--stroke-light-15, rgba(255, 255, 255, 0.15));
  }

  &.light {
    color: white;
    border-radius: var(--Radius-btn, 0.8rem);
    border: 0.1rem solid var(--stroke-light-25, rgba(255, 255, 255, 0.25));
  }

  &.dark {
    color: #0a0a0a;
    border-radius: var(--Radius-btn, 0.8rem);
    border: 1px solid var(--stroke-dark-25, rgba(10, 10, 10, 0.25));
  }

  &__btn {
    opacity: 1;
    width: 100%;
    height: 100%;
    padding: 1.5rem 0.75rem 1.5rem 3.2rem;
    color: inherit;
    background: transparent;
    border: none;
    transition: 300ms ease-in-out;

    @include breakpoint($lp-bp) {
      padding: 1.2rem 0.75rem 1.2rem 1.75rem;
    }

    &:hover {
      padding: 1.5rem 2.25rem 1.5rem 1.5rem;

      @include breakpoint($lp-bp) {
        padding: 1.2rem 1.5rem 1.2rem 1rem;
      }
    }

    &.next {
      padding: 1.5rem 3.2rem 1.5rem 0.75rem;

      @include breakpoint($lp-bp) {
        padding: 1.2rem 1.75rem 1.2rem 0.75rem;
      }

      &:hover {
        padding: 1.5rem 1.5rem 1.5rem 2.25rem;

        @include breakpoint($lp-bp) {
          padding: 1.2rem 1rem 1.2rem 1.5rem;
        }
      }

      & svg {
        transform: scale(-1, 1);
      }
    }

    & .icon-wrap {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
