import { create } from 'zustand'

const initialState = {
    roleName: 'GUEST',
    roleId: 25,
}

const usePermissionMenuStore = create((set) => ({
    ...initialState,
    actions: {
        setPermissionMenuStore: (roleName, roleId) => set({ roleName, roleId }),
    },
}))

export default usePermissionMenuStore

export const usePermissionMenuActions = () => usePermissionMenuStore((state) => state.actions)
export const usePermissionMenuRoleNameState = () =>
    usePermissionMenuStore((state) => state.roleName)
export const usePermissionMenuRoleIdState = () => usePermissionMenuStore((state) => state.roleId)
