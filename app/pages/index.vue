<script setup lang="ts">
const { data: versions, error, pending } = await useFetch('/api/releases', {
  transform: (data: any) => {
    if (!Array.isArray(data)) return []
    return data.map(release => ({
      tag: release.tag_name,
      title: release.name || release.tag_name,
      date: release.published_at,
      markdown: release.body || ''
    }))
  }
})

const title = 'Sai'
const description = 'Sai.st'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <UContainer>
    <UPageHeader
      title="精彩瞬间"
      description="跨越山海的足迹，与不期而遇的风景。每一次出发，都是为了收集世界的奇妙切片。"
      class="py-2 sm:py-8"
    />

    <UPageBody>
      <UChangelogVersions
        :indicator-motion="false"
        :ui="{
          // 建议：给外层也加上适当的上下间距，让滚动更有呼吸感
          root: 'py-16 sm:py-24 lg:py-32', 
          indicator: 'inset-y-0'
        }"
      >
        <UChangelogVersion
          v-for="version in versions"
          :key="version.tag"
          :title="version.title"
          :date="new Date(version.date).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })"
          :tag="version.tag"
          :ui="{
            container: 'max-w-full sm:max-w-xl lg:max-w-2xl min-w-0 lg:ms-72',
            header: 'border-b border-default pb-4',
            title: 'text-3xl',
            date: 'text-xs/9 text-highlighted font-mono',
            
            // 🌟 核心修复：把完整的 sticky 魔法类加回来！
            indicator: 'sticky top-0 pt-16 -mt-16 sm:pt-24 sm:-mt-24 lg:pt-32 lg:-mt-32'
          }"
        >
          <template #body>
            <AppMarkdown
              v-if="version.markdown"
              :value="version.markdown"
            />
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
    </UPageBody>
  </UContainer>
</template>