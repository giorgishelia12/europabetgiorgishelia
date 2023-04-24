import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Card1 from "../../assets/promo-left-img.png"
import Card2 from "../../assets/promo-right-img.png"

export default function Tab2Sec1(){
    return(
        <div className="Tab2Sec1">
            <div className="imgcdiv">
            <img className='Cardimg' src={Card1} alt="" />
            </div>
            <div className="middleTextT">
                <div className="mTU">
                    <span className="txtMTu">სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</span>
                    <div className="timediv">
                        <div className="clockdi">
                    <FontAwesomeIcon icon={faClock} />
                        </div>
                        <span className='time'>19:00 / 19:30 / 20:00</span>
                    </div>
                </div>
                <div className="mTD">
                    <span className='textupmtd'>*ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</span>
                    <span className='textdwnmtd'>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</span>
                    <div>
                    <button className='butdwnmtd'>პოკერის ლობი</button>
                    </div>
                </div>
            </div>
            <div className="imgcdiv">
            <img className='Cardimg' src={Card2} alt="" />
            </div>
        </div>
    )
}
