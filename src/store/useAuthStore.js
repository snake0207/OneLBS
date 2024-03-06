import { create } from 'zustand'
import { createJSONStorage, persist, devtools } from 'zustand/middleware'

const useAuthStore = create(
    devtools(
        persist(
            (set) => ({
                accessToken: null,
                actions: {
                    setAccessToken: (accessToken) => set({ accessToken }),
                    resetAccessToken: () => set({ accessToken: null }),
                },
            }),
            {
                name: 'auth-storage',
                storage: createJSONStorage(() => localStorage),
                partialize: (state) => ({ accessToken: state.accessToken }),
            },
        ),
    ),
)

export default useAuthStore

export const useAuthActions = () => useAuthStore((state) => state.actions)
export const useAccessTokenState = () => useAuthStore((state) => state.accessToken)
