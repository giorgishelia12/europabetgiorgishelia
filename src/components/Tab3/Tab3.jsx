import Sect2 from "../Tab1/Sect2"
import finalinfo from "../../assets/final-info-img.jpg"
import Tab3Sec1 from "./Tab3Sec1"
import tkt from '../../assets/final-item-ticket-icon.png'
import hotel from "../../assets/final-item-hotel-icon.png"
import money from "../../assets/final-item-money-icon.png"
import even from "../../assets/final-item-event-icon.png"
import Smlcrd from "./Smlcrd"
import Bigcrd from "./Bigcrd"
import Sect1 from "../Tab1/Sect1"
import BottomP from "../BottomP"

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

    const info3 =[
        "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
        "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
        "სპეციალური ტურნირი Tournament Sharks II ადგილი",
        "სპეც. ტურნირი Tournament Sharks III ადგილი",
        "Holdem Grinders ლიდერბორდის გამარჯვებული",
        "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
        "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
        "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები"
    ]

    return(
        <div className="Tab3">
            <div className="bottomD rond phn">
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


            <div className="TopH mgtp">
                <div className="headl"></div>
                <span>ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ</span>
            </div>
            <div className="bottomD">


            <div className="cardCont">
                <div className="leftSML">
                <Smlcrd/>
                <Smlcrd/>
                <Smlcrd/>
                </div>
                <div className="rightBG">
                    <Bigcrd/>
                    <Bigcrd/>
                </div>

            </div>
            <div className="foot rb">
                    <span>* თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით</span>
                </div>
                <div className="foot rb g">
                    <span>*ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი ბაი-ინის გადახდით.</span>
                </div>
            </div>

            <div className="TopH mgtp">
                <div className="headl"></div>
                <span>მისტიური გასაღები</span>
            </div>
            <div className="bottomD getdwnF">
                <div className="T1S1">
                    <span className="lhead lsm">მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ საიდუმლო გასაღებს</span>
                </div>
                <div className="mainseccont getdwn">
                     <div className="sec t1M ng">
                        <div className="sect1bot ">
                            {info3.map((obj, i)=>{
                                return  <Sect1 key={i}  num={i+1} big="" def={obj} sr={true}/>
                            })}

                </div>
            </div>
                </div>
            </div>
            <BottomP/>
        </div>
    )
}
