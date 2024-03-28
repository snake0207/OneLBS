import t from '#/common/libs/trans'
import RouterBreadcrumbs from '#/components/common/menu/RouterBreadcrumbs'
import useLayoutStore from '#/store/useLayoutStore'
import TitleBar from '#/components/common/menu/TitleBar'
import Settings from '#/components/layout/Settings'
import { Link } from 'react-router-dom'

function LayoutPage() {
    const { language, themeMode, setLanguage, setThemeMode } = useLayoutStore()
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
            <h2>Titlebar</h2>
            <TitleBar title={t('layouts')} />
            <h2>Settings</h2>
            <Settings />
            <h2>Detail Layout</h2>
            <Link to="/components/layouts/detail">Go to Detail</Link>
        </div>
    )
}

export default LayoutPage
