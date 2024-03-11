import { Box, Pagination, PaginationItem } from '@mui/material'
import { useState } from 'react'
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone'

const CommonPagination = ({ dataLength = 0, onChangePageFunction }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handleChangeCurrentPage = (event, page) => {
        setCurrentPage(page)
        onChangePageFunction(page)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: '16px' }}>
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
                    '& .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-previousNext': {
                        border: 'none',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'paging.text',
                        },
                    },
                    '& .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-firstLast': {
                        border: 'none',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'paging.text',
                        },
                    },
                    '& .MuiButtonBase-root.MuiPaginationItem-root': {
                        borderRadius: '30px',
                        border: '1px solid',
                        borderColor: 'paging.border',
                        color: 'paging.text',
                        fontSize: '16px',
                        fontWeight: 500,
                        '&:hover': {
                            backgroundColor: 'paging.selected',
                            border: '1px solid',
                            borderColor: 'paging.selected',
                            color: 'paging.text',
                        },
                    },
                    '& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
                        borderRadius: '30px',
                        backgroundColor: 'paging.selected',
                        border: '1px solid',
                        borderColor: 'paging.selected',
                        color: 'paging.textSelected',
                        '&:hover': {
                            backgroundColor: 'paging.selected',
                            color: 'paging.textSelected',
                        },
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
