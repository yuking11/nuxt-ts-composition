import Vue from 'vue'
import { Route } from 'vue-router'
import { Store } from 'vuex'
import { MetaInfo } from 'vue-meta'
// import { AxiosInstance } from 'axios'

interface NuxtContext {
  isClient: boolean
  isServer: boolean
  isStatic: boolean
  isDev: boolean
  isHMR: boolean
  route: Route
  store: Store<any>
  env: object
  query: object
  nuxtState: object
  req: Request
  res: Response
  params: { [key: string]: any }
  redirect: (path: string) => void
  error: (params: { statusCode?: String; message?: String }) => void
  beforeNuxtRender: ({ Conmponents, nuxtState }: any) => void
  // $axios: AxiosInstance
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // layout?: string | ((ctx: Context) => string) | undefined
    // middleware?: string | ((ctx: Context, cb: Function) => void | Promise<void>) | Middleware[] | undefined
    // fetch?: ((ctx: Context) => void | Promise<void>) | undefined
    // asyncData?: ((ctx: Context) => void | object | Promise<void | object>) | undefined
    scrollToTop?: boolean
    // transition?: string | Transition | ((to: Route, from: Route) => string) | undefined
    // validate?: ((ctx: Context) => boolean | Promise<boolean>) | undefined
    head?: MetaInfo | (() => MetaInfo) | undefined
  }
}
