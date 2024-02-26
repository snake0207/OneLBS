import { Box, Typography } from '@mui/material'
import MapPoiContent from '#/components/common/map/MapSearchList/MapPoiContent/index.jsx'
import List from '@mui/material/List'
import { useEffect, useRef, useState } from 'react'
import t from '#/common/libs/trans.js'
import TopIcon from '#/assets/topIcon.svg'

const MapSearchList = ({ searchResultArr, selectedPoi, setSelectedPoi }) => {
    const [isResultNon, setIsResultNon] = useState(true)
    const [isTopBtnVisible, setIsTopBtnVisible] = useState(false)
    const poiList = useRef()
    const scrollToTop = () => {
        poiList.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    useEffect(() => {
        if (searchResultArr && searchResultArr.length === 0) setIsResultNon(true)
        else setIsResultNon(false)
    }, [searchResultArr])

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
                margin: '10px',
                backgroundColor: 'dialog.main',
                borderRadius: '8px',
                minHeight: '130px',
                maxHeight: '550px',
                display: isResultNon ? 'flex' : '',
                justifyContent: isResultNon ? 'center' : '',
                alignItems: isResultNon ? 'center' : '',
                overflow: 'auto',
                boxShadow: '0 3px 14px rgb(0 0 0 / 24%)',
                opacity: '95%',
            }}
            ref={poiList}
        >
            {isResultNon ? (
                <Typography sx={{ fontSize: 15, color: '#444' }}>
                    {t('search_no_result', 'common')}
                </Typography>
            ) : (
                searchResultArr && (
                    <List sx={{ width: '100%' }}>
                        {searchResultArr.map((data, idx) => (
                            <MapPoiContent
                                key={data.poiId}
                                idx={data.poiId}
                                name={data.title}
                                address={data.address}
                                selectedPoi={selectedPoi}
                                setSelectedPoi={setSelectedPoi}
                                isLast={searchResultArr.length - 1 === idx}
                            />
                        ))}
                        <Box
                            sx={{
                                position: 'sticky',
                                width: '40px',
                                height: '40px',
                                left: '45%',
                                bottom: '1%',
                                borderRadius: '50px',
                                display: isTopBtnVisible ? 'flex' : 'none',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'primary.darkBlue',
                                cursor: 'pointer',
                            }}
                            onClick={scrollToTop}
                        >
                            <img src={TopIcon} />
                        </Box>
                    </List>
                )
            )}
        </Box>
    )
}

export default MapSearchList
