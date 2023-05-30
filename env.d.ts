/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PDF_TRON_LICENSE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
