import styled from '@emotion/styled'

export const Layout = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    display: flex;
    border: 3px double gray;
`

export const SlideContainer = styled.section`
    border-right: 1px solid gray;
    width: 600px;
`

export const ImageContainer = styled.div`
    width: 600px;
    height: 440px;
    img {
        width: 100%;
        height: 100%;
        background-color: gray;
    }
`

export const DescriptionContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border-top: 1px solid gray;
`

export const SlideButtonContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 30px;
    span {
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: lightgray;
    }
`

export const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 600px;
    box-sizing: border-box;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`

export const ProcessContainer = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px;
`

export const Process = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 80px;
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: ${({ isProcess }) => (isProcess ? 'gray' : 'lightgray')};
        border-radius: 50%;
        color: white;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
`

export const OtpContainer = styled.section`
    display: flex;
    gap: 25px;
`

export const OtpExplan = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
        margin-bottom: 20px;
    }
`

export const QR = styled.div`
    flex-shrink: 0;
    width: 180px;
    height: 180px;
    background-color: gray;
`

export const LargeText = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0;
`

export const MediumText = styled.p`
    font-size: 16px;
    margin: 6px 0;
`

export const H2 = styled.h2`
    font-size: 24px;
`

export const Hr = styled.hr`
    width: 100%;
`

export const ActionContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 110px;
`

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 20px;
`

export const Button = styled.button`
    flex: 0 0 auto;
    padding: 6px 50px;
    font-size: 16px;
    font-weight: 600;
    background-color: lightgray;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
`
