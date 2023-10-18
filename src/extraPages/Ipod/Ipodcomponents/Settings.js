import styleSettings from '../styles/settings.module.css'
import settings from './assets/images/love.jpg'
export default function Settings(){
    return (
        <>
        <div className={styleSettings.settings}>
            <img className={styleSettings.gif} src={settings} alt='settings'/>
        </div>
        </>
    )
}