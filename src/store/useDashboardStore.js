import { getRenewalCycle } from '#/common/libs/dashboard'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const initialState = {
    statDate: '',
    interval: getRenewalCycle()[0].value,
}

const useDashboardStore = create(
    persist(
        (set) => ({
            ...initialState,
            actions: {
                setDashboardStatDate: (statDate) => set({ statDate }),
                setDashboardInterval: (interval) => set({ interval }),
                resetDashboardStore: () => set(initialState),
            },
        }),
        {
            name: 'dashboard-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                statDate: state.statDate,
                interval: state.interval,
            }),
        },
    ),
)

export default useDashboardStore

export const useDashboardActions = () => useDashboardStore((state) => state.actions)
export const useDashboardStatDate = () => useDashboardStore((state) => state.statDate)
export const useDashboardInterval = () => useDashboardStore((state) => state.interval)
