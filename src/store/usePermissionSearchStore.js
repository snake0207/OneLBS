import { create } from 'zustand'

const initialState = {
    page: 1,
    email: '',
    name: '',
    roleId: '25',
}

const usePermissionSearchStore = create((set) => ({
    ...initialState,
    actions: {
        setPermissionSearchStore: ({ email, name, roleId }) => set({ email, name, roleId }),
        setPermissionSearchPage: (page) => set({ page }),
        setPermissionSearchRoleId: (roleId) => set({ roleId }),
        resetPermissionSearchStore: () => set(initialState),
    },
}))

export default usePermissionSearchStore

export const usePermissionSearchActions = () => usePermissionSearchStore((state) => state.actions)
export const usePermissionSearchPageState = () => usePermissionSearchStore((state) => state.page)
export const usePermissionSearchEmailState = () => usePermissionSearchStore((state) => state.email)
export const usePermissionSearchNameState = () => usePermissionSearchStore((state) => state.name)
export const usePermissionSearchRoleIdState = () =>
    usePermissionSearchStore((state) => state.roleId)
