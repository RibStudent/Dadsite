/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_LOGO: string
  readonly VITE_ANALYTICS_ENDPOINT: string
  readonly VITE_ANALYTICS_WEBSITE_ID: string
  readonly VITE_WEB3FORMS_ACCESS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
