import { create } from 'zustand'

const useModalStore = create((set) => ({
    modalType: null,
    actions: {
        openModal: (newState) => set({ isOpen: newState }),
        closeModal: () => set({ modalType: null }),
    },
}))

export default useModalStore

export const useModalActions = () => useModalStore((state) => state.actions)
export const useModalIsOpenState = () => useModalStore((state) => state.isOpen)
