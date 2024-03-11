import { Box, IconButton, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CategoryCount from '#/components/dashboard/CategoryCount'
import useLayoutStore from '#/store/useLayoutStore'
import useEmblaCarousel from 'embla-carousel-react'
import { useCarouselPrevNextButtons } from '#/hooks/useCarouselPrevNextButtons'
import DE from '#/assets/flag/DE.svg'

import style from './style.module'

const VectorMapTooltip = ({ title, categoryCountList }) => {
    const { themeMode } = useLayoutStore()
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
    const { onNextbuttonClick, onPrevButtonClick, nextBtnDisabled, prevBtnDisabled } =
        useCarouselPrevNextButtons(emblaApi)

    return (
        <Box sx={style.dashboardBox}>
            <Box sx={style.Title}>
                <img src={DE} style={{ width: '36px', marginRight: '10px' }} />
                <Typography>{title}</Typography>
            </Box>
            <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
                <Box sx={{ display: 'flex', width: '100%' }}>
                    {categoryCountList.map((item) => (
                        <Box key={item.category} sx={style.items}>
                            <CategoryCount
                                categoryName={item.category}
                                icon={themeMode === 'light' ? item.lightIcon : item.darkIcon}
                                count={item.count}
                            />
                        </Box>
                    ))}
                </Box>
                <IconButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    sx={style.backArrow}
                >
                    <ArrowBackIosIcon sx={{ width: 20, position: 'absolute', left: '25%' }} />
                </IconButton>
                <IconButton
                    onClick={onNextbuttonClick}
                    disabled={nextBtnDisabled}
                    sx={style.nextArrow}
                >
                    <ArrowForwardIosIcon sx={{ width: 20 }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default VectorMapTooltip
