import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const globalStyles = css`
    ${emotionReset}
    :root {
        font-size: 16px;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        a {
            color: black;
        }
    }
    ::-ms-reveal {
        display: none;
    }
`

const GlobalStyles = () => {
    return <Global styles={globalStyles} />
}

export default GlobalStyles
