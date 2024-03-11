import { isMobile } from 'react-device-detect'
import MainLayout from '#/layouts/MainLayout/index.jsx'
import DetailLayout from '#/layouts/DetailLayout/index.jsx'

const DetailWithMobileLayout = () => {
    return <>{isMobile ? <DetailLayout /> : <MainLayout />}</>
}
export default DetailWithMobileLayout
