import { create } from 'zustand'

import { persist, devtools } from 'zustand/middleware'

const initialState = {
    language: 'kr',
    themeMode: 'light',
}

const useLayoutStore = create(
    devtools(
        persist(
            (set) => ({
                ...initialState,
                setLanguage: (language) => set({ language }),
                setThemeMode: (themeMode) => set({ themeMode }),
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
