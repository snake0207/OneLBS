import { create } from 'zustand'
import { LOGIN_PROCESS } from '../contents/constant'

const useLoginProcessStore = create((set) => ({
    loginProcess: LOGIN_PROCESS.INFOMATION,
    actions: {
        changeLoginProcess: (process) => set({ loginProcess: process }),
    },
}))

export default useLoginProcessStore

export const useLoginProcessActions = () => useLoginProcessStore((state) => state.actions)
export const useLoginProcessState = () => useLoginProcessStore((state) => state.loginProcess)
