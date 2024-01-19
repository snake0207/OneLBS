import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

const CarouselOverview = () => {
    const dummyImageList = [
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 1',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 2',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
        {
            imgUrl: '',
            title: 'AutoEver Global Search Info Service Management 3',
            description:
                'Enhancing the efficiency and effectiveness of global Search info service optimization',
        },
    ]
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
        <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
            <Box sx={{ display: 'flex' }}>
                {dummyImageList.map((slideItem, index) => (
                    <Box key={index} sx={{ flex: '0 0 100%', minWidth: 0 }}>
                        <Box
                            component={'img'}
                            src={slideItem.imgUrl}
                            sx={{ width: '100%', height: 400 }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 4 }}>
                            <Typography variant="h6">{slideItem.title}</Typography>
                            <Typography>{slideItem.description}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={{ height: 40 }}>
                {dummyImageList.length > 1 && (
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: 1 }}>
                        {dummyImageList.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => handleClickScrollTo(index)}
                                sx={{
                                    width: 15,
                                    height: 15,
                                    borderRadius: '50%',
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
