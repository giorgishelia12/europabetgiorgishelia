
import Tabmain1 from "./Tabmain1"

import Sect3 from "./Sect3"
import BottomP from "../BottomP"



export default function Tab1(){



    return(
        <div className="Tab1">
            <div className="TopH">
                <div className="headl"></div>
                <span>1₾ რეიკი = 1 ქულას</span>
            </div>
            <div className="bottomD">
                <Tabmain1/>
                <Tabmain1/>
                <div className="foot">
                    <span>* ლიდერბორდის შედეგები განახლდება <a href="__blank">პოკერის ლობიში</a></span>
                </div>
            </div>
            <Sect3/>
            <BottomP/>
        </div>
    )
}
