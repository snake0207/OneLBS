import { Global, css } from '@emotion/react'

const globalStyles = css`
    @import url('http://fonts.googleapis.com/earlyaccess/notosanskr.css');
    :root {
        font-size: 16px;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        box-sizing: border-box;
    }
    ::-ms-reveal {
        display: none;
    }
    ::-webkit-scrollbar {
        width: 9px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 0px;
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: #bcc0c5;
        border: 3px solid #ffffff;
    }
`

const GlobalStyles = () => {
    return <Global styles={globalStyles} />
}

export default GlobalStyles
