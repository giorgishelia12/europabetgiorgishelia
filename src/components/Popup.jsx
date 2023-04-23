import Tops from "./Tops"
import Tabs from "./Tabs"
import Tab1 from "./Tab1/Tab1"
import Tab2 from "./Tab2/Tab2"
import Tab3 from "./Tab3/Tab3"
import { useState } from "react"

export default function Popup(){
    const [Tabn, setTabn] = useState(1)
    return(
        <div className="Popup">
            <Tops/>
            <div className="bottomP">
                <div className="midTxt">
                    <p className="bigP bold">მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</p>
                    <p className="sP">მოხვდი პოკერის ფესტივალზე მალტაში</p>
                </div>
                <Tabs set={setTabn}/>
                {Tabn === 1 ? <Tab1/> : Tabn === 2 ? <Tab2/> : Tabn === 3 ? <Tab3/> : "error" }
            </div>
        </div>
    )
}
