import { Box, Pagination } from '@mui/material'
import { useState } from 'react'

const CommonPagination = ({ dataLength, onChangePageFunction }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const handleChangeCurrentPage = (event, page) => {
        setCurrentPage(page)
        onChangePageFunction(page)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
            <Pagination
                count={Math.ceil(dataLength / 10)} // 총 페이지 수
                page={currentPage}
                siblingCount={2}
                boundaryCount={1}
                shape="rounded"
                showFirstButton
                showLastButton
                onChange={handleChangeCurrentPage}
            />
        </Box>
    )
}

export default CommonPagination
