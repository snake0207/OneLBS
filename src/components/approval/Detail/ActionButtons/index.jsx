import { Button } from '@mui/material'
import t from '#/common/libs/trans.js'
import style from './style.module'

const requesterButtons = (status, clickAction) => {
    switch (status) {
        case 'temporary':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary')}
                        /* 버튼 클래스명 : darkBlueButton, lightButton, lineButton, blueButton */
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('re_request')}
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
                        onClick={() => clickAction('temporary')}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('retrieve')}
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
                        onClick={() => clickAction('temporary')}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('retrieve')}
                        sx={style.blueButton}
                    >
                        {t(`actions.retrieve`, 'approval')}
                    </Button>
                </>
            )
    }
}

const reviewerButtons = (status, clickAction) => {
    switch (status) {
        case 'request':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('temporary')}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('approval')}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.approval`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('reject_review')}
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
                        onClick={() => clickAction('temporary')}
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
                        onClick={() => clickAction('temporary')}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('retrieve')}
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
                        onClick={() => clickAction('temporary')}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.temporary`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('re_request')}
                        sx={style.blueButton}
                    >
                        {t(`actions.re_request`, 'approval')}
                    </Button>
                </>
            )
    }
}

const approverButtons = (status, clickAction) => {
    switch (status) {
        case 'reviewed':
            return (
                <>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('approval')}
                        sx={style.darkBlueButton}
                    >
                        {t(`actions.approval`, 'approval')}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => clickAction('reject_approval')}
                        sx={style.lineButton}
                    >
                        {t(`actions.reject`, 'approval')}
                    </Button>
                </>
            )
    }
}

const ActionButtons = ({ type, status, clickAction }) => {
    switch (type) {
        case 'requester':
            return requesterButtons(status, clickAction)
        case 'reviewer':
            return reviewerButtons(status, clickAction)
        case 'approver':
            return approverButtons(status, clickAction)
    }
}
export default ActionButtons
