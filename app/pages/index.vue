<script setup lang="ts">
const appConfig = useAppConfig()

const { data: versions } = await useFetch(
  computed(() => `https://ungh.cc/repos/${appConfig.repository}/releases`),
  {
    transform: (data: {
      releases: {
        name?: string
        tag: string
        publishedAt: string
        markdown: string
      }[]
    }) =>
      data.releases.map(release => ({
        tag: release.tag,
        title: release.name || release.tag,
        date: release.publishedAt,
        markdown: release.markdown
      }))
  }
)

const title = '待编辑'
const description =
  '待编辑'

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
      title="待编辑"
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
          :date="version.date"
          :tag="version.tag"
          :ui="{
            container: 'max-w-2xl min-w-0 ms-72',
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