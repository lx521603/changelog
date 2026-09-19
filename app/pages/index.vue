<script setup lang="ts">
const appConfig = useAppConfig()

const { data: versions } = await useFetch(
  computed(() => `https://api.github.com/repos/${appConfig.repository}/releases`),
  {
    headers: {
      Accept: 'application/vnd.github+json'
    },
    transform: (data: {
      name?: string
      tag_name: string
      published_at: string
      body: string
    }[]) =>
      data.map(release => ({
        tag: release.tag_name,
        title: release.name || release.tag_name,
        date: release.published_at,
        markdown: release.body
      }))
  }
)

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
      title="Changelog"
      description="知之真切笃实处即是行，行之明觉精察处即是知"
      class="py-[50px]"
    />

    <UPageBody>
      <UChangelogVersions
        :indicator-motion="false"
        :ui="{
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