<template>
  <NuxtSelectNative
    v-model="$colorMode.preference"
    :options="[
      { value: 'system', text: $t('theme_mode.system') },
      { value: 'light', text: $t('theme_mode.light') },
      { value: 'dark', text: $t('theme_mode.dark') }
    ]"
    select-class="appearance-none font-sans block w-full dark:bg-transparent border light:border-gray-200 dark:border-secondary-dark rounded-md py-2 pl-3 pr-10 text-base light:text-gray-500 dark:text-secondary-surface focus:outline-none light:focus:ring-black dark:focus:ring-white light:focus:border-gray-400 dark:focus:border-secondary-light sm:text-sm"
  />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ColorModeSelector'
})
</script>
