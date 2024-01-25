import t from '#/common/libs/trans'
import RouterBreadcrumbs from '#/components/common/menu/RouterBreadcrumbs'
import useLayoutStore from '#/store/useLayoutStore'
import useFullScreen from '#/hooks/useFullScreen'
import TitleBar from '#/components/common/menu/TitleBar'

function LayoutPage() {
    const { language, themeMode, setLanguage, setThemeMode } = useLayoutStore()
    const [isFullScreen, toggleFullScreen] = useFullScreen()
    return (
        <div>
            <h1>Layouts</h1>
            <h2>Change Language</h2>
            <div>Current Language: {language}</div>
            <div>
                <button onClick={() => setLanguage('kr')}>{t('kor')}</button>
                <button onClick={() => setLanguage('en')}>{t('eng')}</button>
            </div>
            <h2>Change Theme</h2>
            <div>Current Theme: {themeMode}</div>
            <div>
                <button onClick={() => setThemeMode('light')}>{'light'}</button>
                <button onClick={() => setThemeMode('dark')}>{'dark'}</button>
            </div>
            <h2>Breadcrumbs</h2>
            <RouterBreadcrumbs />
            <h2>FullScreen</h2>
            <div>Current FullScreen: {isFullScreen ? 'true' : 'false'}</div>
            <div>
                <button onClick={toggleFullScreen}>Toggle Full Screen</button>
            </div>
            <h2>Titlebar</h2>
            <TitleBar title={t('layouts')} />
        </div>
    )
}

export default LayoutPage
