import { create } from 'zustand'

/**
 * modalTitle: MODAL_TITLE.title
 */
const useModalStore = create((set) => ({
    modalTitle: null,
    modalParam: null,
    actions: {
        /**
         * @param {*} newState MODAL_TITLE.name
         * @returns void
         */
        openModal: (newState, newParam) => set({ modalTitle: newState, modalParam: newParam }),
        closeModal: () => set({ modalTitle: null, modalParam: null }),
    },
}))

export default useModalStore

export const useModalActions = () => useModalStore((state) => state.actions)

export const useModalIsOpenState = () => useModalStore((state) => state.isOpen)
export const useModalTitleState = () => useModalStore((state) => state.modalTitle)
export const useModalParamState = () => useModalStore((state) => state.modalParam)
