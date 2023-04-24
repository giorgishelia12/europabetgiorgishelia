import Sect2 from "../Tab1/Sect2"
import finalinfo from "../../assets/final-info-img.jpg"
export default function Tab3(){
    return(
        <div className="Tab3">
            <div className="bottomD rond">
                <div className="tb3TopF">
                    <img className="finalinf" src={finalinfo} alt="" />
                    <div className="txtTb3top">
                        <span className="bgtx">ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!</span>
                        <span className="smTx">The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.</span>
                    </div>
                </div>
                <div className="secCon">
                <Sect2  tx="15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს"/>
                </div>
            </div>
        </div>
    )
}
