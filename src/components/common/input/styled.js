import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${({ isRule }) => (isRule ? '130px' : '100px')};
    margin: 8px 0;
`

export const InputLabel = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0;
`

export const HelperText = styled.p`
    font-size: 16px;
    color: red;
    margin: 8px 0;
`

export const MediumText = styled.p`
    font-size: 16px;
`

export const RequiredSpan = styled.span`
    font-size: inherit;
    color: red;
`

export const InputContainer = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

export const SubmitButton = styled.button`
    flex: 0 0 auto;
    padding: 6px 30px;
    font-size: 16px;
    font-weight: 600;
    background-color: white;
    border: 1px solid lightgray;
    cursor: pointer;
`
