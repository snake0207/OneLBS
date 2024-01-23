import { create } from 'zustand'
import { createJSONStorage, persist, devtools } from 'zustand/middleware'

const useAuthStore = create(
    devtools(
        persist(
            (set) => ({
                accessToken: null,
                setAccessToken: (accessToken) => set({ accessToken }),
            }),
            {
                name: 'auth-storage',
                storage: createJSONStorage(() => localStorage),
            },
        ),
    ),
)

export default useAuthStore

export const useSetAccessToken = () => useAuthStore((state) => state.setAccessToken)
export const useAccessTokenState = () => useAuthStore((state) => state.accessToken)
