import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
export default function Sect4(props){
    return(
        <div className="Sect4">
            <span className="sect4txt">{props.txt}</span>
            <FontAwesomeIcon className='arrw' icon={faAngleDown} />
        </div>
    )
}
