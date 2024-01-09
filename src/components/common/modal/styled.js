import styled from '@emotion/styled'

export const ModalContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 600px;
    min-width: 600px;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
`

export const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    padding: 10px 20px;
`

export const ModalContant = styled.div`
    padding: 20px;
`

export const H2 = styled.h2`
    font-size: 24px;
`
