<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot } from 'reka-ui'
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import { z } from 'zod'
import IconSprite from '@/components/ui/icons/IconSprite.vue'
import UIButton from '@/components/ui/UIButton.vue'
import UICheckbox from '@/components/ui/UICheckbox.vue'
import UIInput from '@/components/ui/UIInput.vue'
import UITypography from '@/components/ui/UITypography.vue'
import { ROUTES } from '@/shared/constants/routes.ts'
import './PromoForm.scss'

const isDialogOpen = ref(false)
// Схема валидации с Zod
const validationSchema = toTypedSchema(
  z.object({
    name: z.string()
      .min(2, 'Имя должно содержать минимум 2 символа')
      .max(50, 'Имя слишком длинное'),
    phone: z.string()
      .min(10, 'Телефон должен содержать минимум 10 цифр')
      // eslint-disable-next-line regexp/prefer-d
      .regex(/^[0-9]+$/, 'Телефон должен содержать только цифры'),
    policy: z.boolean().refine(val => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  }),
)

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema,
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: phone, errorMessage: phoneError } = useField('phone')
const { value: policy } = useField('policy')

const onSubmit = handleSubmit((values) => {
  // eslint-disable-next-line no-console
  console.log('Форма отправлена:', values)
  // eslint-disable-next-line no-alert
  alert(`Форма отправлена: Имя - ${values.name}, Телефон - ${values.phone}`)
  resetForm()
  isDialogOpen.value = true
})
</script>

<template>
  <form class="promo__form" @submit="onSubmit">
    <UITypography variant="title-m" as-child>
      <h2>Получить индивидуальное предложение на покупку в кредит от 4.9%</h2>
    </UITypography>
    <div class="promo__form_fieldset">
      <UIInput label="Имя" :is-error="!!nameError" :error-msg="nameError">
        <input id="name" v-model="name" type="text" name="name" autocomplete="name" placeholder="Введите ваше имя">
      </UIInput>
      <UIInput label="Телефон" :is-error="!!phoneError" :error-msg="phoneError">
        <input id="phone" v-model="phone" type="phone" name="phone" autocomplete="tel" placeholder="+7 (___) ___-__-__">
      </UIInput>
    </div>
    <div class="promo__form_policy">
      <UICheckbox theme="dark">
        <input v-model="policy" type="checkbox">
      </UICheckbox>
      <UITypography variant="body-m-regular" as="span">
        Я принимаю
        <UITypography variant="body-s-regular" as-child>
          <RouterLink :to="ROUTES.policy">условия передачи <br class="desk">информации</RouterLink>
        </UITypography>
      </UITypography>
    </div>
    <UIButton type="submit" class="promo__form_submit" :disabled="isSubmitting">
      Оставить заявку
      <template #rightIcon>
        <IconSprite class="icon-arrow" name="arrow" />
      </template>
    </UIButton>
  </form>

  <DialogRoot v-model:open="isDialogOpen">
    <DialogPortal>
      <DialogOverlay class="thanks__dialog_overlay" />
      <DialogContent class="thanks__dialog_content">
        <h2>Спасибо</h2>
        <p>Форма успешно отправлена</p>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
