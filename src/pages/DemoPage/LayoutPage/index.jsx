import t from '#/common/libs/trans'
import useLayoutStore from '#/store/useLayoutStore'

function LayoutPage() {
    const { language, setLanguage } = useLayoutStore()
    return (
        <div>
            <h1>Layouts</h1>
            <h2>Change Language</h2>
            <div>Current Language: {language}</div>
            <div>
                <button onClick={() => setLanguage('kr')}>{t('kor')}</button>
                <button onClick={() => setLanguage('en')}>{t('eng')}</button>
            </div>
        </div>
    )
}

export default LayoutPage
