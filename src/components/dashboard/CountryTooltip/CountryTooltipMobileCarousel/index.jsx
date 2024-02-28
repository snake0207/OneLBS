import CategoryCount from '#/components/dashboard/CategoryCount'
import { useCarouselPrevNextButtons } from '#/hooks/useCarouselPrevNextButtons'
import useLayoutStore from '#/store/useLayoutStore'
import { Box, IconButton } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import style from './style.module'

const CountryTooltipMobileCarousel = ({ categoryCountList }) => {
    const { themeMode } = useLayoutStore()
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
    const { onNextbuttonClick, onPrevButtonClick, nextBtnDisabled, prevBtnDisabled } =
        useCarouselPrevNextButtons(emblaApi)

    return (
        <Box ref={emblaRef} sx={style.europeBox}>
            <Box sx={{ display: 'flex', gap: '14px' }}>
                {categoryCountList.map((item) => (
                    <Box key={item.category} sx={{ width: 85 }}>
                        <CategoryCount
                            categoryName={item.category}
                            icon={themeMode === 'light' ? item.lightIcon : item.darkIcon}
                            count={item.count}
                            width={85}
                        />
                    </Box>
                ))}
            </Box>
            <IconButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} sx={style.backArrow}>
                <ArrowBackIosIcon sx={{ width: 20, position: 'absolute', left: '25%' }} />
            </IconButton>
            <IconButton onClick={onNextbuttonClick} disabled={nextBtnDisabled} sx={style.nextArrow}>
                <ArrowForwardIosIcon sx={{ width: 20 }} />
            </IconButton>
        </Box>
    )
}

export default CountryTooltipMobileCarousel
