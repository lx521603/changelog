<script setup lang="ts">
const appConfig = useAppConfig()

const { data: versions } = await useFetch(computed(() => `https://ungh.cc/repos/${appConfig.repository}/releases`), {
  transform: (data: {
    releases: {
      name?: string
      tag: string
      publishedAt: string
      markdown: string
    }[]
  }) => {
    return data.releases.map(release => ({
      tag: release.tag,
      title: release.name || release.tag,
      date: release.publishedAt,
      markdown: release.markdown
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
      title="Log"
      description="收集生活中一切值得驻足的美好与趣味"
      class="py-2 sm:py-8"
    />

    <UPageBody>
      <UChangelogVersions
        :indicator-motion="false"
        :ui="{
          root: 'pt-0 pb-8',
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
            indicator: 'sticky top-0'
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