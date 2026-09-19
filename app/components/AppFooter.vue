<template>
  <USeparator class="h-px" />
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Built with Zaeth.com • ©
        <ClientOnly>
          {{ new Date().getFullYear() }}
          <template #fallback>2026</template>
        </ClientOnly>
      </p>
    </template>
    <template #right>
      <UButton
        to="https://github.com/lx521603
        target="_blank"
        color="neutral"
        variant="ghost"
      >
        GitHub
      </UButton>
    </template>
  </UFooter>
</template>
<script setup lang="ts">
</script>
