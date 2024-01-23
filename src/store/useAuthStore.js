import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set) => ({
            accessToken: null,
            changeAccessToken: (accessToken) => set({ accessToken }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)

export default useAuthStore

export const useAuthchangeAccessToken = () => useAuthStore((state) => state.changeAccessToken)
export const useAccessTokenState = () => useAuthStore((state) => state.accessToken)
