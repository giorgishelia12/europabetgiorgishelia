import Tabmain1 from "./Tabmain1"
import Sect3 from "./Sect3"
import Sect4 from "./Sect4"


export default function Tab1(){
    const infoSect4 = ["როდის იწყება და რა ფორმატით გაიმართება აქცია","როგორ მივიღო აქციაში მონაწილეობა?","სხვადასვა"]



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
        </div>
    )
}
