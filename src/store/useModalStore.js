import { create } from 'zustand'

/**
 * modalTitle: MODAL_TITLE.title
 */
const useModalStore = create((set) => ({
    modalTitle: null,
    modalParam: null,
    modalSize: 'sm',
    actions: {
        /**
         * @param {*} newState MODAL_TITLE.name
         * @returns void
         */
        openModal: (newState, newParam, newSize) =>
            set({ modalTitle: newState, modalParam: newParam, modalSize: newSize }),
        closeModal: () => set({ modalTitle: null, modalParam: null, modalSize: 'sm' }),
    },
}))

export default useModalStore

export const useModalActions = () => useModalStore((state) => state.actions)

export const useModalTitleState = () => useModalStore((state) => state.modalTitle)
export const useModalParamState = () => useModalStore((state) => state.modalParam)
export const useModalSizeState = () => useModalStore((state) => state.modalSize)
