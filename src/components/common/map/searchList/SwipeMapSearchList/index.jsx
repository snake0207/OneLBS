import { Box, SwipeableDrawer, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { gpssListResponseDataMapper } from '#/pages/ApprovalHistoryPage/responseMapper.js'
import t from '#/common/libs/trans.js'
import List from '@mui/material/List'
import MapPoiContent from '#/components/common/map/searchList/MapSearchList/MapPoiContent/index.jsx'
import TopIcon from '#/assets/topIcon.svg'

const SwipeMapSearchList = ({
    searchResultArr,
    selectedPoi,
    setSelectedPoi,
    isGpssSearch = false,
}) => {
    const [isResultNon, setIsResultNon] = useState(true)
    const [isTopBtnVisible, setIsTopBtnVisible] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const poiList = useRef()
    const scrollToTop = () => {
        poiList.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    const parsedList = gpssListResponseDataMapper(searchResultArr)
    // 검색 결과가 없을 때 처리
    useEffect(() => {
        if (!parsedList || parsedList.length === 0) setIsResultNon(true)
        else setIsResultNon(false)
        setIsDrawerOpen(true)
    }, [searchResultArr])

    // 검색 전에는 drawer를 닫아준다
    useEffect(() => {
        setIsDrawerOpen(false)
    }, [])

    useEffect(() => {
        const poiListCurrent = poiList.current
        poiListCurrent.addEventListener('scroll', handleScroll)
        return () => {
            poiListCurrent.removeEventListener('scroll', handleScroll) //clean up
        }
    }, [])

    const handleScroll = () => {
        if (poiList.current.scrollTop > 30) setIsTopBtnVisible(true)
        else setIsTopBtnVisible(false)
    }

    return (
        <SwipeableDrawer
            variant="persistent"
            open={isDrawerOpen}
            anchor={'bottom'}
            onOpen={() => setIsDrawerOpen(true)}
            onClose={() => setIsDrawerOpen(false)}
            disableSwipeToOpen={false}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                '& .MuiDrawer-paper': {
                    height: `calc(50% - 200px)`,
                    overflowY: 'visible',
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: -40,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    visibility: 'visible',
                    right: 0,
                    left: 0,
                    backgroundColor: 'background.main',
                    boxShadow: '0 -6px 4px rgb(0 0 0 / 8%)',
                    '& .MuiTypography-body1': {
                        p: '16px 16px 0',
                    },
                }}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
                <Box
                    sx={{
                        width: 30,
                        height: 6,
                        backgroundColor: 'color.swiper',
                        borderRadius: 3,
                        position: 'absolute',
                        top: 10,
                        left: 'calc(50% - 15px)',
                    }}
                />
                <Typography sx={{ p: 2, color: 'background.main' }}>|</Typography>
            </Box>
            <Box
                sx={{
                    px: 2,
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        width: '350px',
                        minHeight: '130px',
                        maxHeight: 'calc(100% - 10px)',
                        display: !isResultNon ? '' : 'flex',
                        justifyContent: !isResultNon ? '' : 'center',
                        alignItems: !isResultNon ? '' : 'center',
                        overflow: 'auto',
                        backgroundColor: 'background.main',
                        '@media (max-width:767px)': {
                            width: '100%',
                            '& .MuiList-root': {
                                pt: '0',
                            },
                        },
                    }}
                    ref={poiList}
                >
                    {isResultNon ? (
                        <Typography sx={{ fontSize: 15, color: '#444' }}>
                            {t('search_no_result', 'common')}
                        </Typography>
                    ) : (
                        parsedList && (
                            <List sx={{ width: '100%' }}>
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
            </Box>
        </SwipeableDrawer>
    )
}

export default SwipeMapSearchList
