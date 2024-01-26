import { create } from 'zustand'

import { devtools } from 'zustand/middleware'

const initialState = {
    show: false,
    type: 'alert',
    title: '',
    content: '',
    onOk: null,
    onCancel: null,
}

const usePopupStore = create(
    devtools((set) => ({
        ...initialState,
        actions: {
            /**
             * @param {string} type
             * @param {string} content
             * @param {function} onOk
             * @param {function} onCancel
             * @returns void
             */
            showPopup: (type = 'alert', content, onOk = null, onCancel = null) =>
                set({ show: true, type, content, onOk, onCancel }),
            closePopup: () => set({ show: false }),
            setType: (type) => set({ type }),
            setTitle: (title) => set({ title }),
            setContent: (content) => set({ content }),
            setOnOk: (onOk) => set({ onOk }),
            setOnCancel: (onCancel) => set({ onCancel }),
            reset: () => set(initialState),
        },
    })),
)

export const getPopupState = () => usePopupStore.getState()
export const usePopupActions = () => usePopupStore((state) => state.actions)

export default usePopupStore
