import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const initialState = {
    userId: null,
    permissions: [],
    pwChangeRequired: false,
}

const useUserStore = create(
    persist(
        (set) => ({
            ...initialState,
            actions: {
                setUserStore: (userId, permissions, pwChangeRequired) =>
                    set({ userId, permissions, pwChangeRequired }),
                setPwChangeRequired: (pwChangeRequired) => set({ pwChangeRequired }),
                resetUserStore: () => set(initialState),
            },
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                userId: state.userId,
                permissions: state.permissions,
                pwChangeRequired: state.pwChangeRequired,
            }),
        },
    ),
)

export default useUserStore

export const useUserActions = () => useUserStore((state) => state.actions)
export const useUserIdState = () => useUserStore((state) => state.userId)
export const useUserPermissionsState = () => useUserStore((state) => state.permissions)
export const useUserPwChangeRequiredState = () => useUserStore((state) => state.pwChangeRequired)
