import t from '#/common/libs/trans'
import RouterBreadcrumbs from '#/components/common/menu/RouterBreadcrumbs'
import useLayoutStore from '#/store/useLayoutStore'

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
        </div>
    )
}

export default LayoutPage
