import { Box, IconButton, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CategoryCount from '#/components/dashboard/CategoryCount'
import useLayoutStore from '#/store/useLayoutStore'
import LanguageIcon from '#/assets/languagesIconDark.svg'
import useEmblaCarousel from 'embla-carousel-react'
import { useCarouselPrevNextButtons } from '#/hooks/useCarouselPrevNextButtons'

import style from './style.module'

const VectorMapTooltip = ({ title, categoryCountList }) => {
    const { themeMode } = useLayoutStore()
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
    const { onNextbuttonClick, onPrevButtonClick, nextBtnDisabled, prevBtnDisabled } =
        useCarouselPrevNextButtons(emblaApi)

    return (
        <Box sx={style.dashboardBox}>
            <Box sx={style.Title}>
                <img src={LanguageIcon} style={{ width: '20px' }} />
                <Typography>{title}</Typography>
            </Box>
            <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
                <Box sx={{ display: 'flex' }}>
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
                <IconButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                    <ArrowBackIosIcon sx={{ width: 20 }} />
                </IconButton>
                <IconButton onClick={onNextbuttonClick} disabled={nextBtnDisabled}>
                    <ArrowForwardIosIcon sx={{ width: 20 }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default VectorMapTooltip
