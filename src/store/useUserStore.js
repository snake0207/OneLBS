import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const initialState = {
    userType: 'O',
    userId: '',
    cropName: '',
    permissions: [],
}

const useUserStore = create(
    persist(
        (set) => ({
            ...initialState,
            actions: {
                setUserTypeUserStore: (userType) => set({ userType }),
                setPermissionsUserStore: (permissions) => set({ permissions }),
                setUserIdUserStore: (userId) => set({ userId }),
                setUserCropNameUserStore: (cropName) => set({ cropName }),
                resetUserStore: () => set(initialState),
            },
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                userType: state.userType,
                userId: state.userId,
                cropName: state.cropName,
                permissions: state.permissions,
            }),
        },
    ),
)

export default useUserStore

export const useUserActions = () => useUserStore((state) => state.actions)
export const useUserTypeState = () => useUserStore((state) => state.userType)
export const useUserIdState = () => useUserStore((state) => state.userId)
export const useCropNameState = () => useUserStore((state) => state.cropName)
export const useUserPermissionsState = () => useUserStore((state) => state.permissions)
