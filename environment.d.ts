declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string
        APPLICATION_ID: string
        TOKEN: string
        CLIENT_ID: string
        CLIENT_SECRET: string
        DEV_GUILD_ID: string
        DATABASE_URL: string
      }
    }
  }
  
  export {}