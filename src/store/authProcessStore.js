import { create } from 'zustand'
import { AUTH_PROCESS } from '../contents/constant'

const useAuthProcessStore = create((set) => ({
    authProcess: AUTH_PROCESS.imfomation,
    actions: {
        changeAuthProcess: (process) => set({ authProcess: process }),
    },
}))

export default useAuthProcessStore

export const useAuthProcessActions = () => useAuthProcessStore((state) => state.actions)
export const useAuthProcessState = () => useAuthProcessStore((state) => state.authProcess)
