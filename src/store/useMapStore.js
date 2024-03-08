import { devtools } from 'zustand/middleware'
import { create } from 'zustand'

/**
 * 구글 지도에서 리스트 아이템에 마우스 hover 상태 관리
 */
const useMapStore = create(
    devtools((set) => ({
        hoveredPoi: null,
        lat: '',
        lon: '',
        actions: {
            setHoveredPoi: (hoveredPoi) => set({ hoveredPoi }),
            setCoordinates: (lat, lon) => set({ lat: lat, lon: lon }),
            resetCoordinates: () => set({ lat: '', lon: '' }),
        },
    })),
)

export default useMapStore
export const useMapActions = () => useMapStore((state) => state.actions)
