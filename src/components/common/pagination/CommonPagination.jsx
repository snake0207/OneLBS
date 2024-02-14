import { Box, Pagination, PaginationItem } from '@mui/material'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import KeyboardDoubleArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowLeftTwoTone'
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone'
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone'

const CommonPagination = ({ dataLength, onChangePageFunction }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handleChangeCurrentPage = (event, page) => {
        setCurrentPage(page)
        onChangePageFunction(page)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 6 }}>
            <Pagination
                count={Math.ceil(dataLength / 10)} // 총 페이지 수
                page={currentPage}
                siblingCount={2}
                boundaryCount={1}
                shape="rounded"
                showFirstButton
                showLastButton
                onChange={handleChangeCurrentPage}
                sx={{
                    '& .css-dfpu2-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        },
                    },
                    '$ .css-dfpu2-MuiButtonBase-root-MuiPaginationItem-root.Mui-disabled': {
                        minWidth: '20px',
                    },
                }}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{
                            previous: KeyboardArrowLeftTwoToneIcon,
                            next: KeyboardArrowRightTwoToneIcon,
                        }}
                        {...item}
                    />
                )}
            />
        </Box>
    )
}

export default CommonPagination
