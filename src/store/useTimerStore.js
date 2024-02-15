import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useTimerStore = create(
    devtools((set) => ({
        time: null,
        actions: {
            setTime: (time) => set({ time }),
            decreseTime: () => set((state) => ({ time: state.time - 1 })),
            reset: () => set({ time: null }),
        },
    })),
)

export default useTimerStore

export const useTimeState = () => useTimerStore((state) => state.time)
export const useTimeActions = () => useTimerStore((state) => state.actions)
