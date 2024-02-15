import { create } from 'zustand'

import { persist, devtools } from 'zustand/middleware'

const initialState = {
    language: 'kr',
    themeMode: 'light',
    sidebar: true,
    device: 'pc',
}

const useLayoutStore = create(
    devtools(
        persist(
            (set) => ({
                ...initialState,
                setLanguage: (language) => set({ language }),
                setThemeMode: (themeMode) => set({ themeMode }),
                setSidebar: (sidebar) => set({ sidebar }),
                setDevice: (device) => set({ device }),
                reset: () => set(initialState),
            }),
            {
                name: 'layout',
            },
        ),
    ),
)

export const getLayoutState = () => useLayoutStore.getState()

export default useLayoutStore
