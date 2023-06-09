import banner from '../assets/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Tops(){
    return(
        <div className='Tops'>
            <div className="signTop">
                <div className='logo'></div>
                <div className='topbut'>
                    <button>Sign up</button>
                    <button className='orangB'>Sign in</button>
                </div>
            </div>
            <img className='banner' src={banner} alt="poker legends banner"/>
            <div className="topN">
                <div className="leftN">
                    <span className="Sl">სლოტები</span>
                    <p className='S2 bold'>10 იანვარი - 12 მარტი</p>
                </div>
                <button className="closeB"><FontAwesomeIcon className='Xmar' icon={faXmark} /></button>
            </div>
        </div>
    )
}
