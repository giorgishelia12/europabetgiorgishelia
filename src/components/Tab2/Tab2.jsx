import Tab2Sec1 from "./Tab2Sec1"
import Tabmain1 from "../Tab1/Tabmain1"
import Tab2Sec2 from "./Tab2Sec2"
export default function Tab2(){

    return(
        <div className="Tab2">
            <div className="TopH">
                <div className="headl"></div>
                <span>ტურნირები და სატელიტები</span>
            </div>
            <div className="bottomD">
                <Tab2Sec1 />
            </div>
            <div className="TopH upToh">
                <div className="headl"></div>
                <span>ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ</span>
            </div>
            <div className="bottomD">
                <Tabmain1/>
            </div>
            <div className="bottomD rond">
                <div className="topBotDb">
                    <span>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</span>
                </div>
                <Tab2Sec2 />
            </div>
        </div>
    )
}
