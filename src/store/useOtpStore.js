import { create } from 'zustand'

const initialState = {
    twoFactorAuth: 'N', // 'Y' | 'N' QR 코드 등록 유무
    secretKey: '', // OTP 수동 등록 키
    twoFactorSecret: null, // OTP 인증 키
    qrCodeUrl: null, // QR 코드 주소
}

const useOtpStore = create((set) => ({
    ...initialState,
    actions: {
        setOtpStore: (twoFactorAuth, secretKey, twoFactorSecret, qrCodeUrl) =>
            set({ twoFactorAuth, secretKey, twoFactorSecret, qrCodeUrl }),
        setTwoFactorAuth: (newState) => set({ twoFactorAuth: newState }),
        setSecretkey: (newState) => set({ secretKey: newState }),
        setTwoFactorSecret: (newState) => set({ twoFactorSecret: newState }),
        setQrCodeUrl: (newState) => set({ qrCodeUrl: newState }),
        resetOtpStore: () => set(initialState),
    },
}))

export default useOtpStore

export const useOtpActions = () => useOtpStore((state) => state.actions)
export const useOtpTwoFactorAuth = () => useOtpStore((state) => state.twoFactorAuth)
export const useOtpSecretKey = () => useOtpStore((state) => state.secretKey)
export const useOtpTwoFactorSecretState = () => useOtpStore((state) => state.twoFactorSecret)
export const useOtpQrCodeUrlState = () => useOtpStore((state) => state.qrCodeUrl)
