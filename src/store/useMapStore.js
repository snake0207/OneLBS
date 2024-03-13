import { devtools } from 'zustand/middleware'
import { create } from 'zustand'

/**
 * 구글 지도에서 리스트 아이템에 마우스 hover 상태 관리
 */
const initailState = {
    hoveredPoi: null,
    lat: '',
    lon: '',
    seLat: '',
    seLon: '',
    neLat: '',
    neLon: '',
}

const useMapStore = create(
    devtools((set) => ({
        ...initailState,
        actions: {
            setHoveredPoi: (hoveredPoi) => set({ hoveredPoi }),
            setCoordinates: (lat, lon) => set({ lat, lon }),
            setMapBounds: (seLat, seLon, neLat, neLon) => set({ seLat, seLon, neLat, neLon }),
            resetCoordinates: () => set({ lat: '', lon: '' }),
            resetMapBounds: () => set({ seLat: '', seLon: '', neLat: '', neLon: '' }),
        },
    })),
)

export default useMapStore
export const useMapActions = () => useMapStore((state) => state.actions)
