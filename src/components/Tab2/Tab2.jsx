import Tab2Sec1 from "./Tab2Sec1"
import Tabmain1 from "../Tab1/Tabmain1"
import Tab2Sec2 from "./Tab2Sec2"
import Sect4 from "../Tab1/Sect4"
import Sect5 from "../Tab1/Sect5"
import bnr1 from "../../assets/Rounded Rectangle 1.png"
import bnr4 from "../../assets/Rounded Rectangle 1.png"
import bnr2 from "../../assets/Rounded Rectangle 2.png"
import bnr3 from "../../assets/Rounded Rectangle 3.png"
import Tab2minsc from "./Tab2minsc"
export default function Tab2(){
    const infoSect5 = [[bnr1, "Get 300% Cashback", "retrieve 300% bet amount as real money only here", "rgb(13, 100, 155)"],
    [bnr2, "Get 300% Cashback", "retrieve 300% bet amount as real money only here","rgb(26,23,108)"],
    [bnr3, "Get 300% Cashback", "retrieve 300% bet amount as real money only here","rgb(239,84,28)"],
    [bnr4, "Get 300% Cashback", "retrieve 300% bet amount as real money only here", "rgb(13, 100, 155)"]]

    const infoSect4 = ["როდის იწყება და რა ფორმატით გაიმართება აქცია","როგორ მივიღო აქციაში მონაწილეობა?","სხვადასვა"]



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
                <div className="minsc">
                <Tab2minsc/>
                </div>
                <Tabmain1 sh={true}/>
            </div>
            <div className="bottomD rond">
                <div className="topBotDb">
                    <span>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</span>
                </div>
                <Tab2Sec2 />
            </div>
            <div className="TopH upToh bordR">
                <div className="headl"></div>
                <span>ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ</span>
                <div className="foot non">
                    <span>* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</span>
                </div>
            </div>
            <div className="heatt">
            <span className="HeadTL">წესები და პირობები</span>
            </div>
            <div className="infod">
            {infoSect4.map((obj, i)=>{
                return <Sect4 key={i} txt={obj}/>
            })}
            </div>
            <div className="heatt">
            <span className="HeadTL">მსგავსი აქციები</span>
            </div>
            <div className="bnrinf">

                {
                    infoSect5.map((obj, i)=>{
                        return <Sect5 key={i} bn={obj[0]} mn={obj[1]} sc={obj[2]} cl={obj[3]}/>
                    })
                }
            </div>
        </div>
    )
}
