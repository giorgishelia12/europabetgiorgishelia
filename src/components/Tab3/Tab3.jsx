import Sect2 from "../Tab1/Sect2"
import finalinfo from "../../assets/final-info-img.jpg"
import Tab3Sec1 from "./Tab3Sec1"
import tkt from '../../assets/final-item-ticket-icon.png'
import hotel from "../../assets/final-item-hotel-icon.png"
import money from "../../assets/final-item-money-icon.png"
import even from "../../assets/final-item-event-icon.png"

export default function Tab3(){

    const info1 =[
        [tkt, true, "ორმხრივი ავიაბილეთი"],
        [even, true, "The Festival in Malta -ს მეინ ივენთის ბაი-ინი"],
        [even, true, "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"],
        [hotel, true, "სასტუმრო Golden Tulip Vivaldi Hotel"],
        [money, true, "€500 სახარჯი ფული"],
    ]
    const info2 =[
        [tkt, true, "ორმხრივი ავიაბილეთი"],
        [even, true, "The Festival in Malta -ს მეინ ივენთის ბაი-ინი"],
        [hotel, true, "სასტუმრო"],
        [money, true, "€500 სახარჯი ფული"],
    ]

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
                <div className="thrdCon">
                    <Tab3Sec1 ar={info1}/>
                    <Tab3Sec1 ar={info1}/>
                    <Tab3Sec1 ar={info2}/>
                </div>
            </div>
        </div>
    )
}
