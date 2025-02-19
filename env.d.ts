declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GMAIL_EMAIL: string
      GMAIL_PASSWORD: string
    }
  }
}

export {}
