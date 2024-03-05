import { Button } from '@mui/material'
import t from '#/common/libs/trans.js'
import style from './style.module'

const ActionButtons = ({ type, status, clickAction, id }) => {
    switch (type) {
        case 'requester':
            return status === 'request' ? (
                <Button
                    variant="contained"
                    onClick={() => clickAction('retrieve', id)}
                    sx={{ mr: '4px' }}
                >
                    {t(`actions.retrieve`, 'approval')}
                </Button>
            ) : status === 'rejected_review' || status === 'temporary' ? (
                <Button
                    variant="contained"
                    onClick={() => clickAction('re_request', id)}
                    sx={{ mr: '4px' }}
                >
                    {t(`actions.re_request`, 'approval')}
                </Button>
            ) : null
        case 'reviewer':
            return status === 'request' ? (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('approval', id)}
                        sx={{ mr: '4px' }}
                    >
                        {t(`actions.approval`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('reject', id)}
                        sx={style.darkBlueButton}
                        /* 버튼 클래스명 : darkBlueButton, lightButton, lineButton, blueButton */
                    >
                        {t(`actions.reject`, 'approval')}
                    </Button>
                </>
            ) : status === 'reviewed' ? (
                <Button
                    variant="contained"
                    onClick={() => clickAction('retrieve', id)}
                    sx={{ mr: '4px' }}
                >
                    {t(`actions.retrieve`, 'approval')}
                </Button>
            ) : null
        case 'approver':
            return status === 'reviewed' ? (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('approval', id)}
                        sx={{ mr: '4px' }}
                    >
                        {t(`actions.approval`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('reject', id)}
                        sx={{ mr: '4px' }}
                    >
                        {t(`actions.reject`, 'approval')}
                    </Button>
                </>
            ) : null
    }
}
export default ActionButtons
