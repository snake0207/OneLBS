import { create } from 'zustand'

const useModalStore = create((set) => ({
    modalTitle: null,
    actions: {
        openModal: (newState) => set({ modalTitle: newState }),
        closeModal: () => set({ modalTitle: null }),
    },
}))

export default useModalStore

export const useModalActions = () => useModalStore((state) => state.actions)

export const useModalIsOpenState = () => useModalStore((state) => state.isOpen)
export const useModalTitleState = () => useModalStore((state) => state.modalTitle)
