import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const initialState = {
    userType: 'O',
    permissions: [],
}

const useUserStore = create(
    persist(
        (set) => ({
            ...initialState,
            actions: {
                setUserTypeUserStore: (userType) => set({ userType }),
                setPermissionsUserStore: (permissions) => set({ permissions }),
                resetUserStore: () => set(initialState),
            },
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                userType: state.userType,
                permissions: state.permissions,
            }),
        },
    ),
)

export default useUserStore

export const useUserActions = () => useUserStore((state) => state.actions)
export const useUserTypeState = () => useUserStore((state) => state.userType)
export const useUserPermissionsState = () => useUserStore((state) => state.permissions)
