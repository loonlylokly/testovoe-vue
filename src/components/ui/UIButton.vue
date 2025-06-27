<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary-black' | 'primary-light' | 'secondary-black' | 'secondary-light' | 'arrow'
    size?: 'lg-sm' | 'lg' | 'sm'
    loading?: boolean
    disabled?: boolean
    as?: string | object
  }>(),
  {
    variant: 'primary-black',
    size: 'lg-sm',
    loading: false,
    disabled: false,
    as: 'button',
  },
)
</script>

<template>
  <component :is="props.as" :class="`btn ${props.variant} ${props.size}`">
    <slot name="leftIcon" />
    <slot />
    <slot name="rightIcon" />
  </component>
</template>

<style lang="scss">
@use '@/shared/styles/modules' as *;

.btn {
  width: fit-content;
  height: fit-content;
  min-height: 6rem;
  padding: 0.8rem 1.5rem 1.5rem 1.5rem;
  display: inline-flex;
  gap: 3rem;
  border: 0.1rem solid var(--accent-primary-default, #0A0A0A);
  border-radius: var(--Radius-btn, 0.8rem);
  background: var(--accent-primary-default, #0A0A0A);
  color: var(--text-light-primary, #FFF);
  transition: 300ms ease-in-out;
  text-decoration: none;
  @include font-btn-m;

  &:hover {
    background: var(--accent-primary-hover, #CCB076);
    border-color: var(--accent-primary-hover, #CCB076);

    & .icon-arrow svg {
      transform: rotate(0);
    }
  }

  &:disabled {
    background: var(--disabled-dark-10, rgba(0, 0, 0, 0.10));
  }

  &.primary-light {
    background: var(--accent-secondary-default, #FFF);
    color: var(--text-dark-primary, #0A0A0A);
    border-color: var(--accent-secondary-default, #FFF);

    &:hover {
      background: var(--accent-primary-hover, #CCB076);
      border-color: var(--accent-primary-hover, #CCB076);
    }

    &:disabled {
      background: var(--disabled-light-10, rgba(255, 255, 255, 0.10));
      border-color: var(--disabled-light-10, rgba(255, 255, 255, 0.10));
    }
  }

  & .icon-arrow {
    width: 1.6rem;
    height: 1.6rem;
    align-self: flex-end;

    & svg {
      transform: rotate(-45deg);
      transition: transform 300ms ease-in-out;
    }
  }

  &.secondary-light {
    background: transparent;
    border: 1px solid var(--stroke-light-25, rgba(255, 255, 255, 0.25));

    &:hover {
      color: var(--text-dark-primary, #0A0A0A);
      background: var(--accent-secondary-default, #FFF);
      border-color: var(--accent-secondary-default, #FFF);
    }

    &:disabled {
      background: var(--bg-light-10, rgba(255, 255, 255, 0.10));
      border-color: var(--bg-light-10, rgba(255, 255, 255, 0.10));
    }
  }

  &.secondary-black {
    color: var(--text-dark-primary, #0A0A0A);
    background: transparent;
    border: 1px solid var(--stroke-dark-25, rgba(10, 10, 10, 0.25));

    &:hover {
      color: var(--text-light-primary, #FFF);
      background: var(--accent-primary-default, #0A0A0A);
      border-color: var(--accent-primary-default, #0A0A0A);
    }

    &:disabled {
      color: var(--disabled-dark-20, rgba(10, 10, 10, 0.20));
      border-radius: var(--Radius-btn, 0.8rem);
      background: var(--disabled-dark-10, rgba(0, 0, 0, 0.10));
    }
  }

  &.lg-sm {
    @include breakpoint($lp-bp) {
      display: inline-flex;
      min-height: 5rem;
      padding: 0.5rem 1.5rem 1rem 1.5rem;
      gap: 2rem;
    }
  }
}
</style>
