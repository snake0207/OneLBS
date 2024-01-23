import { Box, Typography } from '@mui/material'
import MapPoiContent from '#/components/common/map/MapSearchList/MapPoiContent/index.jsx'
import List from '@mui/material/List'
import { useEffect, useRef, useState } from 'react'

const sampleData = [
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
    {
        name: 'Times Square',
        address: '10036 New York, Manhattan, United States',
    },
]

const MapSearchList = ({ isResultNon }) => {
    const [selectedPoi, setSelectedPoi] = useState(null)
    const [isTopBtnVisible, setIsTopBtnVisible] = useState(false)
    const poiList = useRef()
    const scrollToTop = () => {
        poiList.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const poiListCurrent = poiList.current
        poiListCurrent.addEventListener('scroll', handleScroll)
        return () => {
            poiListCurrent.removeEventListener('scroll', handleScroll) //clean up
        }
    }, [])

    const handleScroll = () => {
        if (poiList.current.scrollTop > 70) setIsTopBtnVisible(true)
        else setIsTopBtnVisible(false)
    }

    return (
        <Box
            sx={{
                width: '350px',
                padding: '2px',
                borderRadius: '8px',
                border: '1px solid #D1D1D1',
                minHeight: '130px',
                maxHeight: '400px',
                display: isResultNon === true ? 'flex' : '',
                justifyContent: isResultNon === true ? 'center' : '',
                alignItems: isResultNon === true ? 'center' : '',
                overflow: 'auto',
            }}
            ref={poiList}
        >
            {isResultNon === true ? (
                <Typography>검색 결과가 없습니다</Typography>
            ) : (
                sampleData && (
                    <List sx={{ width: '100%' }}>
                        {sampleData.map((data, idx) => (
                            <MapPoiContent
                                key={idx}
                                idx={idx}
                                name={data.name}
                                address={data.address}
                                selectedPoi={selectedPoi}
                                setSelectedPoi={setSelectedPoi}
                                isLast={sampleData.length - 1 === idx}
                            />
                        ))}
                        <Box
                            sx={{
                                position: 'sticky',
                                width: '100px',
                                height: '30px',
                                left: '35%',
                                bottom: '1%',
                                borderRadius: '8px',
                                border: '1px solid #D1D1D1',
                                display: isTopBtnVisible ? 'flex' : 'none',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#D1D1D1',
                                cursor: 'pointer',
                            }}
                            onClick={scrollToTop}
                        >
                            TOP
                        </Box>
                    </List>
                )
            )}
        </Box>
    )
}

export default MapSearchList
