<script lang="ts" setup>
import { computed, ref, useAttrs, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'h1' | 'h2' | 'title-l' | 'title-m' | 'body-l-regular' | 'body-m-regular' | 'body-s-regular' | 'caption-s-semibold' | 'btn-m' | 'error-field' | 'logo-description'
    as?: string | object
    lineClamp?: number | null
    asChild?: boolean
  }>(),
  {
    variant: 'body-l-regular',
    as: 'p',
    lineClamp: null,
    asChild: false,
  },
)

const lineClamp = ref('')
const lineClampStyles = ref('')
lineClamp.value = props.lineClamp === null ? '' : 'line-clamp'
lineClampStyles.value = props.lineClamp === null ? '' : `-webkit-line-clamp: ${props.lineClamp}; line-clamp: ${props.lineClamp};`
const slots = useSlots()
const attrs = useAttrs()

const onlyChild = computed(() => {
  if (slots.default && slots.default().length === 1) {
    return slots.default()[0]
  }
  return null
})
</script>

<template>
  <template v-if="props.asChild && onlyChild">
    <component :is="onlyChild" :class="`font-${variant} ${lineClamp}`" :style="lineClampStyles"
      v-bind="{ ...onlyChild.props, ...attrs }" />
  </template>
  <component :is="props.as" v-else :class="`font-${variant} ${lineClamp}`" :style="lineClampStyles" v-bind="attrs">
    <slot />
  </component>
</template>

<style lang="scss">
@use '@/shared/styles/modules' as *;

.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.font-h1 {
  @include font-h1;
}

.font-h2 {
  @include font-h2;
}

.font-title-l {
  @include font-title-l;
}

.font-title-m {
  @include font-title-m;
}

.font-body-l-regular {
  @include font-body-l-regular;
}

.font-body-m-regular {
  @include font-body-m-regular;
}

.font-body-s-regular {
  @include font-body-s-regular;
}

.font-caption-s-semibold {
  @include font-caption-s-semibold;
}

.font-btn-m {
  @include font-btn-m;
}

.font-caption-s-semibold {
  @include font-caption-s-semibold;
}

.font-error-field {
  @include font-error-field;
}

.font-logo-description {
  @include font-logo-description;
}
</style>
