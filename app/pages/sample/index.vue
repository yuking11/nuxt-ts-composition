<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Sample Page
      </h1>
      <h2 class="subtitle">
        this is sample page.
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import { MetaInfo } from 'vue-meta'
import { HeadInfo } from '@/types/headInfo'
import PageMeta from '@/mixins/meta'

export default createComponent({
  head(): MetaInfo {
    return {
      ...this.head
    }
  },
  setup(_props, context) {
    const pageMeta: HeadInfo = {
      title: 'サンプルページ',
      description: 'サンプルページです。',
      type: 'article'
    }
    const url: string = context.root.$route.path
    const head = PageMeta(pageMeta, url)
    return {
      head
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
