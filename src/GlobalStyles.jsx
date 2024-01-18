import { Global, css } from '@emotion/react'

const globalStyles = css`
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
`

const GlobalStyles = () => {
    return <Global styles={globalStyles} />
}

export default GlobalStyles
