import { Global, css } from '@emotion/react'

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

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
        width: 5px;
        height: 7px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 20px;
        background: #e2e2e2;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: #a9a9a9;
        border: 3px solid transparent;
    }
`

const GlobalStyles = () => {
    return <Global styles={globalStyles} />
}

export default GlobalStyles
