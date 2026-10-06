<template>
  <USeparator
    icon="i-simple-icons-nuxtdotjs"
    class="h-px"
  />

  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Sai.St • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        to="https://x.com/oniyt1980"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="X (Twitter)"
        color="neutral"
        variant="ghost"
      />
      
      <UButton
        to="https://www.instagram.com/miraist80/"
        target="_blank"
        icon="i-simple-icons-instagram"
        aria-label="Instagram"
        color="neutral"
        variant="ghost"
      />
      
    </template>
  </UFooter>
</template>