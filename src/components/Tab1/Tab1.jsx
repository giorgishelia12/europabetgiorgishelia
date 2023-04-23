
import Tabmain1 from "./Tabmain1"
import bnr1 from "../../assets/Rounded Rectangle 1.png"
import bnr4 from "../../assets/Rounded Rectangle 1.png"
import bnr2 from "../../assets/Rounded Rectangle 2.png"
import bnr3 from "../../assets/Rounded Rectangle 3.png"
import Sect3 from "./Sect3"
import Sect4 from "./Sect4"
import Sect5 from "./Sect5"


export default function Tab1(){
    const infoSect4 = ["როდის იწყება და რა ფორმატით გაიმართება აქცია","როგორ მივიღო აქციაში მონაწილეობა?","სხვადასვა"]
    const infoSect5 = [[bnr1, "Get 300% Cashback", "retrieve 300% bet amount as real money only here", "rgb(13, 100, 155)"],
    [bnr2, "Get 300% Cashback", "retrieve 300% bet amount as real money only here","rgb(26,23,108)"],
    [bnr3, "Get 300% Cashback", "retrieve 300% bet amount as real money only here","rgb(239,84,28)"],
    [bnr4, "Get 300% Cashback", "retrieve 300% bet amount as real money only here", "rgb(13, 100, 155)"]]


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
