import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

const CarouselOverview = ({ dummyImageList }) => {
    // EmblaCarousel 기본 설정, Autoplay plugin 설정
    const [emblaRef, emblaApi] = useEmblaCarousel({ watchDrag: false }, [
        Autoplay({ delay: 1000 * 10, stopOnInteraction: false, stopOnMouseEnter: true }),
    ])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleClickScrollTo = (index) => {
        emblaApi && emblaApi.scrollTo(index)
    }

    const onSelect = (emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    // emblaApi를 구독하여 select index 업데이트
    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', onSelect)
        }
    }, [emblaApi])
    return (
        <Box ref={emblaRef} sx={{ overflow: 'hidden', width: '600px' }}>
            <Box sx={{ display: 'flex' }}>
                {dummyImageList.map((slideItem, index) => (
                    <Box key={index} sx={{ position: 'relative', flex: '0 0 100%', minWidth: 0 }}>
                        <Box
                            component={'img'}
                            src={slideItem.imgUrl}
                            sx={{
                                width: '100%',
                                position: 'absolute',
                                top: 0,
                                zIndex: 1,
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0.5,
                                justifyContent: 'flex-start',
                                height: 62,
                                color: 'white',
                                position: 'relative',
                                zIndex: 2,
                                mt: '541px',
                                pl: '40px',
                            }}
                        >
                            <Typography variant="h6" sx={{ fontSize: 16 }}>
                                {slideItem.title}
                            </Typography>
                            <Typography sx={{ fontSize: 11 }}>{slideItem.description}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={{ position: 'relative', height: '72px', zIndex: 5 }}>
                {dummyImageList.length > 1 && (
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: 0.5 }}>
                        {dummyImageList.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => handleClickScrollTo(index)}
                                sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '10px',
                                    bgcolor: index === selectedIndex ? 'gray' : 'lightgray',
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                    </Stack>
                )}
            </Box>
        </Box>
    )
}

export default CarouselOverview
