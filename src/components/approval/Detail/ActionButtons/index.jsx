import { Button } from '@mui/material'
import t from '#/common/libs/trans.js'
import style from './style.module'

const requesterButtons = (status, clickAction, id) => {
    switch (status) {
        case 'temporary':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary', id)}
                        /* 버튼 클래스명 : darkBlueButton, lightButton, lineButton, blueButton */
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('re_request', id)}
                        sx={style.blueButton}
                    >
                        {t(`actions.re_request`, 'approval')}
                    </Button>
                </>
            )
        case 'request':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary', id)}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('retrieve', id)}
                        sx={style.lightButton}
                    >
                        {t(`actions.retrieve`, 'approval')}
                    </Button>
                </>
            )
        case 'rejected_review':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary', id)}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('retrieve', id)}
                        sx={style.blueButton}
                    >
                        {t(`actions.retrieve`, 'approval')}
                    </Button>
                </>
            )
    }
}

const reviewerButtons = (status, clickAction, id) => {
    switch (status) {
        case 'request':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary', id)}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('approval', id)}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.approval`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('reject_review', id)}
                        sx={style.lineButton}
                    >
                        {t(`actions.reject`, 'approval')}
                    </Button>
                </>
            )
        case 'rejected_review':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary', id)}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                </>
            )
        case 'reviewed':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary', id)}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('retrieve', id)}
                        sx={style.lightButton}
                    >
                        {t(`actions.retrieve`, 'approval')}
                    </Button>
                </>
            )
        case 'rejected_approval':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary', id)}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('re_request', id)}
                        sx={style.blueButton}
                    >
                        {t(`actions.re_request`, 'approval')}
                    </Button>
                </>
            )
    }
}

const approverButtons = (status, clickAction, id) => {
    switch (status) {
        case 'reviewed':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('approval', id)}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.approval`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('reject_approval', id)}
                        sx={style.lineButton}
                    >
                        {t(`actions.reject`, 'approval')}
                    </Button>
                </>
            )
    }
}

const ActionButtons = ({ type, status, clickAction, id }) => {
    switch (type) {
        case 'requester':
            return requesterButtons(status, clickAction, id)
        case 'reviewer':
            return reviewerButtons(status, clickAction, id)
        case 'approver':
            return approverButtons(status, clickAction, id)
    }
}
export default ActionButtons
