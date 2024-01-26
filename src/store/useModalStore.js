import { create } from 'zustand'

/**
 * modalTitle: MODAL_TITLE.title
 */
const useModalStore = create((set) => ({
    modalTitle: null,
    actions: {
        /**
         * @param {*} newState MODAL_TITLE.name
         * @returns void
         */
        openModal: (newState) => set({ modalTitle: newState }),
        closeModal: () => set({ modalTitle: null }),
    },
}))

export default useModalStore

export const useModalActions = () => useModalStore((state) => state.actions)

export const useModalIsOpenState = () => useModalStore((state) => state.isOpen)
export const useModalTitleState = () => useModalStore((state) => state.modalTitle)
