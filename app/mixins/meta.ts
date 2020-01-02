// import { createComponent, ref } from '@vue/composition-api'
import { MetaInfo } from 'vue-meta'
import { HeadInfo } from '@/types/headInfo'

export default (pageMeta: HeadInfo, path: string) => {
  const title: string = pageMeta.title || ('site_name' as string)
  const description: string =
    pageMeta.description || ('site_description' as string)
  const type: string = pageMeta.type || ('website' as string)

  const pageHead: MetaInfo = {
    title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: type
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.BASE_URL}${path}`
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `${process.env.BASE_URL}${path}`
      }
    ]
  }

  return pageHead
}
