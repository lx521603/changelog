<script setup lang="ts">
const open = ref(false)

const items = [
  {
    label: '首页',
    to: '/'
  },
  {
    label: 'Blog',
    to: '/blog'
  }
]
</script>

<template>
  <UHeader v-model:open="open">
    <template #left>
      <NuxtLink
        to="/"
        class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
      >
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />
      <UButton
        label="联系我"
        color="neutral"
        class="hidden lg:flex"
        to="mailto:x@sai.st"
        target="_blank"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />
    </template>
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />

      <div class="mt-4 flex flex-col gap-2">
       <!--      
       <UButton
          label="Sign in"
          color="neutral"
          variant="soft"
          block
        />
        -->
        <UButton
          label="联系我"
          block
          to="mailto:x@sai.st"
          target="_blank"
        />
      </div>
    </template>
  </UHeader>
</template>