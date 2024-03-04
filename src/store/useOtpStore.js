import { create } from 'zustand'

const useOtpStore = create((set) => ({
    secretKey: null, // otp 수동 등록 키
    twoFactorSecret: null, // otp 인증 키
    otpQrCodeUrl: null, // QR 코드 주소
    actions: {
        setSecretkey: (newState) => set({ secretKey: newState }),
        setTwoFactorSecret: (newState) => set({ twoFactorSecret: newState }),
        setOtpQrCodeUrl: (newState) => set({ otpQrCodeUrl: newState }),
    },
}))

export default useOtpStore

export const useOtpActions = () => useOtpStore((state) => state.actions)
export const useOtpSecretKey = () => useOtpStore((state) => state.secretKey)
export const useOtpTwoFactorSecretState = () => useOtpStore((state) => state.setTwoFactorSecret)
export const useOtpQrCodeUrlState = () => useOtpStore((state) => state.otpQrCodeUrl)
