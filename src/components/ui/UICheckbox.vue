<script setup lang="ts">
import UITypography from '@/components/ui/UITypography.vue'

const props = withDefaults(
  defineProps<{
    label?: string
    theme?: 'light' | 'dark'
  }>(),
  {
    label: '',
    theme: 'dark',
  },
)
</script>

<template>
  <label :class="`checkbox ${props.theme}`">
    <slot type="checkbox" />
    <span class="checkbox-new">
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.7935 1.7074C11.6612 1.5746 11.4818 1.5 11.2948 1.5C11.1077 1.5 10.9283 1.5746 10.7961 1.7074L4.24096 8.29017L1.21275 5.24919C1.14768 5.18153 1.06985 5.12757 0.98379 5.09045C0.897731 5.05332 0.805171 5.03378 0.711511 5.03296C0.617851 5.03215 0.524966 5.05007 0.438278 5.08569C0.351589 5.1213 0.272831 5.1739 0.206601 5.24041C0.140371 5.30692 0.0879943 5.38601 0.0525272 5.47306C0.01706 5.56012 -0.000787247 5.6534 2.66331e-05 5.74745C0.000840514 5.84151 0.0202994 5.93446 0.0572677 6.02088C0.094236 6.1073 0.147974 6.18547 0.215345 6.25081L3.74225 9.7926C3.87453 9.9254 4.05391 10 4.24096 10C4.428 10 4.60738 9.9254 4.73966 9.7926L11.7935 2.70902C11.9257 2.57618 12 2.39604 12 2.20821C12 2.02038 11.9257 1.84023 11.7935 1.7074Z"
          fill="currentcolor" />
      </svg>
    </span>
    <UITypography v-if="props.label" class="checkbox-label" variant="caption-s-semibold" as="span">
      {{ props.label }}
    </UITypography>
  </label>
</template>

<style lang="scss">
@use '@/shared/styles/modules' as *;

.checkbox {
  --w: 2.4rem;
  --h: 2.4rem;
  --clr: var(--text-light-primary, #FFF);
  --clr-bg: transparent;
  --clr-brd: var(--stroke-light-25, rgba(255, 255, 255, 0.25));
  --clr-brd-h: var(--stroke-light-50, rgba(255, 255, 255, 0.50));
  --clr-accent: var(--text-dark-primary, #000);
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @include breakpoint($lp-bp) {
    --w: 1.8rem;
    --h: 1.8rem;
    gap: 1.2rem;
  }

  &.dark {
    --clr: var(--text-dark-primary, #0A0A0A);
    --clr-bg: transparent;
    --clr-brd: var(--stroke-dark-25, rgba(10, 10, 10, 0.25));
    --clr-brd-h: var(--stroke-dark-50, rgba(10, 10, 10, 0.50));
    --clr-accent: var(--text-light-primary, #FFF);
  }
}

.checkbox-label {
  display: flex;
  align-items: center;
  user-select: none;
  color: var(--clr);
  @include font-body-m-regular;
}

.checkbox input {
  appearance: none;
  position: relative;
  width: var(--w, 2.4rem);
  min-width: var(--w, 2.4rem);
  height: var(--h, 2.4rem);
  color: var(--clr-accent);
  background: var(--clr-bg);
  border-radius: var(--Radius-small-elements, 0.4rem);
  border: 0.1rem solid var(--clr-brd);
  transition: 300ms;

  &:hover {
    border: 1px solid var(--clr-brd-h);
  }

  &:checked {
    background: var(--clr);
  }
}

.checkbox-new {
  content: '';
  position: absolute;
  width: 0rem;
  height: 0rem;
  padding: 0.6rem;
  opacity: 0;
  color: var(--clr-accent);
  transition: 500ms ease-in-out 150ms;

  @include breakpoint($lp-bp) {
    padding: 0.39rem;
  }
}

.checkbox input:checked+.checkbox-new {
  transition: 300ms ease-in-out;
  width: var(--w, 2.4rem);
  height: var(--h, 2.4rem);
  opacity: 1;
}

.checkbox input:disabled {
  background: #ccc;
  border-color: #ccc;
}

.checkbox input:disabled::after {
  filter: grayscale(100%);
}
</style>
