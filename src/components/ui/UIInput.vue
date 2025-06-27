<script setup lang="ts">
import ErrorIcon from '@/components/ui/icons/ErrorIcon.vue'
import UITypography from '@/components/ui/UITypography.vue'

const props = withDefaults(
  defineProps<{
    validation?: 'default' | 'valid' | 'invalid'
    isError?: boolean
    errorMsg?: string
    label?: string
  }>(),
  {
    validation: 'default',
    isError: false,
    errorMsg: 'Ошибка',
    label: 'Поле ввода',
  },
)
</script>

<template>
  <label :class="`input ${props.validation}`">
    <UITypography class="input__label" variant="caption-s-semibold" as="span">{{ props.label }}</UITypography>
    <slot />
    <div v-if="props.isError" class="input__error_wrap">
      <ErrorIcon />
      <UITypography class="input__error" varient="error-field" as="span">{{ props.errorMsg }}</UITypography>
    </div>
  </label>
</template>

<style lang="scss">
@use '@/shared/styles/modules' as *;

.input {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  transition: 300ms ease-in-out;

  &__label {
    color: var(--text-dark-primary, #0A0A0A);
    transition: 300ms ease-in-out;

    @include breakpoint($sm-bp) {
      color: var(--text-dark-primary, #0A0A0A);
      font-family: "LT Superior";
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      /* 1.8rem */
      letter-spacing: 0.06rem;
      text-transform: uppercase;
    }
  }

  &:has(input:disabled) .input__label {
    color: var(--disabled-dark-20, rgba(10, 10, 10, 0.20));
  }

  &__error_wrap {
    position: absolute;
    left: 0;
    top: calc(100% + 0.5rem);
    max-width: 37.5rem;
    display: flex;
    padding: 1rem 1.5rem;
    align-items: flex-start;
    gap: 1rem;
    border-radius: var(--Radius-btn, 0.8rem);
    border: 1px solid var(--stroke-dark-10, rgba(10, 10, 10, 0.10));
    background: var(--bg-light-white, #FFF);
    transition: 300ms ease-in-out;
    z-index: 3;

    & .input__error {
      color: var(--text-dark-secondary, rgba(10, 10, 10, 0.60));
    }

    & .icon-wrap {
      min-width: 1.4rem;
      max-width: 1.4rem;
      height: 1.4rem;
      color: #fe3838;
    }
  }

  & input {
    height: 6rem;
    padding: 0rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: var(--text-dark-primary, #0A0A0A);
    border-radius: var(--Radius-btn, 0.8rem);
    border: 1px solid var(--stroke-dark-25, rgba(10, 10, 10, 0.25));
    background: var(--bg-light-white, #FFF);
    transition: 300ms ease-in-out;
    @include font-body-s-regular;

    @include breakpoint($lp-bp) {
      height: 5rem;
      padding: 0 1.5rem;
      @include font-body-m-regular;
    }

    &:hover {
      background: var(--bg-dark-10, rgba(10, 10, 10, 0.05));
    }

    &:focus-visible {
      outline: 0.1rem solid var(--stroke-dark-50, rgba(10, 10, 10, 0.50));
    }

    &:disabled {
      color: var(--disabled-dark-20, rgba(10, 10, 10, 0.20));
      border: 1px solid var(--disabled-dark-20, rgba(10, 10, 10, 0.20));
      background: var(--bg-light-white, #FFF);
    }

    &::placeholder {
      color: var(--text-dark-secondary, rgba(10, 10, 10, 0.60));
    }
  }
}
</style>
