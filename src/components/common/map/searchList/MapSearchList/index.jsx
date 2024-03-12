import { Box, Typography } from '@mui/material'
import MapPoiContent from '#/components/common/map/searchList/MapSearchList/MapPoiContent/index.jsx'
import List from '@mui/material/List'
import { useEffect, useRef, useState } from 'react'
import t from '#/common/libs/trans.js'
import TopIcon from '#/assets/topIcon.svg'
import Button from '@mui/material/Button'
import { isBrowser } from 'react-device-detect'
import { gpssListResponseDataMapper } from '#/pages/ApprovalHistoryPage/mapper.js'

const MapSearchList = ({
    searchResultArr,
    selectedPoi,
    setSelectedPoi,
    isGpssSearch = false,
    setIsNewPoiCreateOpen,
    fetchPoiListNextPage,
    isPoiListLoading,
}) => {
    const [isResultNon, setIsResultNon] = useState(true)
    const [isTopBtnVisible, setIsTopBtnVisible] = useState(false)
    const poiList = useRef()
    const [isApiFetching, setIsApiFetching] = useState(false)

    useEffect(() => {
        setIsApiFetching(isPoiListLoading)
    }, [isPoiListLoading])

    const parsedList = gpssListResponseDataMapper(searchResultArr)
    // 검색 결과가 없을 때 처리
    useEffect(() => {
        if (!parsedList || parsedList.length === 0) setIsResultNon(true)
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
        // scroll top
        if (poiList.current.scrollTop > 30) setIsTopBtnVisible(true)
        else setIsTopBtnVisible(false)
        // 무한 스크롤 구현
        if (
            poiList.current.scrollTop + poiList.current.clientHeight >=
            poiList.current.scrollHeight - 200
        ) {
            if (isApiFetching) return
            fetchPoiListNextPage()
        }
    }

    const scrollToTop = () => {
        poiList.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleNewPoiOpen = () => {
        setIsNewPoiCreateOpen(true)
        setSelectedPoi(null)
    }

    return (
        <Box
            sx={{
                width: '350px',
                margin: '10px',
                backgroundColor: 'dialog.main',
                borderRadius: '8px',
                minHeight: isResultNon ? '130px' : 'calc(100vh - 440px)',
                maxHeight: isBrowser ? '480px' : 'calc(100vh - 620px)',
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
                <Typography sx={{ fontSize: 15, color: 'text.main' }}>
                    {t('search_no_result', 'common')}
                </Typography>
            ) : (
                parsedList && (
                    <List sx={{ width: '100%' }}>
                        {/* gpss 검색일 때만 poi 생성버튼 표출 */}
                        {isGpssSearch && (
                            <Box
                                sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    backgroundColor: 'dialog.main',
                                    zIndex: 10,
                                }}
                            >
                                <Button
                                    variant={'contained'}
                                    onClick={handleNewPoiOpen}
                                    sx={{
                                        fontSize: 13,
                                        fontWeight: 400,
                                        mr: '10px',
                                        backgroundColor: 'button.main',
                                    }}
                                >
                                    POI생성
                                </Button>
                            </Box>
                        )}
                        {parsedList.map((data, idx) => (
                            <MapPoiContent
                                key={data.poiId}
                                selectedPoi={selectedPoi}
                                setSelectedPoi={setSelectedPoi}
                                isLast={searchResultArr.length - 1 === idx}
                                isGpssSearch={isGpssSearch}
                                poiData={data}
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
