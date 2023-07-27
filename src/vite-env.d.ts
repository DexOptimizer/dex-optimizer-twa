/// <reference types="vite/client" />

interface Window {
    Telegram?: {
        WebApp?: {
            openLink: (url: string, options?: any) => void,
            initDataUnsafe?: {
                user?: {
                    id: number,
                    first_name: string,
                    username: string
                }
            }
        }
    }
}