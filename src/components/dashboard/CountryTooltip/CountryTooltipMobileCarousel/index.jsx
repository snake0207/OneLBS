import CategoryCount from '#/components/dashboard/CategoryCount'
import { useCarouselPrevNextButtons } from '#/hooks/useCarouselPrevNextButtons'
import useLayoutStore from '#/store/useLayoutStore'
import { Box, IconButton } from '@mui/material'
import useEmblaCarousel from 'embla-carousel-react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const CountryTooltipMobileCarousel = ({ categoryCountList }) => {
    const { themeMode } = useLayoutStore()
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
    const { onNextbuttonClick, onPrevButtonClick, nextBtnDisabled, prevBtnDisabled } =
        useCarouselPrevNextButtons(emblaApi)

    return (
        <Box ref={emblaRef} sx={{ overflow: 'hidden', width: '283px' }}>
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
            <IconButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                <ArrowBackIosIcon />
            </IconButton>
            <IconButton onClick={onNextbuttonClick} disabled={nextBtnDisabled}>
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    )
}

export default CountryTooltipMobileCarousel
