<template>
  <UApp>
    <UHeader>
      <template #left>
        <AppLogo class="w-auto h-6 shrink-0 text-highlighted" />
        <TemplateMenu />
      </template>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <NuxtPage />

    <UFooter />
  </UApp>
</template>