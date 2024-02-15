import { create } from 'zustand'
import { AUTH_STEP } from '../contents/constant'

const useAuthStepStore = create((set) => ({
    authStep: AUTH_STEP.information,
    actions: {
        changeAuthStep: (newStep) => set({ authStep: newStep }),
        decreaseAuthStep: () =>
            set((state) => ({
                authStep: state.authStep > 0 ? state.authStep - 1 : AUTH_STEP.information,
            })),
        initAuthStep: () => set({ authStep: AUTH_STEP.information }),
    },
}))

export default useAuthStepStore

export const useAuthStepActions = () => useAuthStepStore((state) => state.actions)
export const useAuthStepState = () => useAuthStepStore((state) => state.authStep)
