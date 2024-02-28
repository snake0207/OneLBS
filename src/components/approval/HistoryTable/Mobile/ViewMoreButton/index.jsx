import { Button, Stack, Icon } from '@mui/material'
import PlusIcon from '#/assets/plusIcon.svg'
import PlusIconDark from '#/assets/plusIconDark.svg'
import useLayoutStore from '#/store/useLayoutStore'

const ViewMoreButton = ({ onChangePageFunction }) => {
    const { themeMode } = useLayoutStore()
    return (
        <Stack alignItems={'center'}>
            <Button onClick={onChangePageFunction} sx={{ color: 'text.main' }}>
                <Icon
                    style={{
                        display: 'flex',
                        width: '10px',
                        alignItems: 'center',
                        marginRight: '6px',
                    }}
                >
                    {themeMode === 'light' ? <img src={PlusIcon} /> : <img src={PlusIconDark} />}
                </Icon>
                더보기
            </Button>
        </Stack>
    )
}
export default ViewMoreButton
