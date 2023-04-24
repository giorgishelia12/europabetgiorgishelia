import exampleIcon from "../../assets/example-icon.png"
import Sect1 from "./Sect1"
import Sect2 from "./Sect2"
import travel from "../../assets/travel-icon-sm.png"
import masterC from "../../assets/cc-mastercard.svg"
import ticket from '../../assets/ticket-icon-sm.png'

export default function Tabmain1(){
    const info1 = [['-', "A კატეგორიის საგზური"],
    ['-', "B კატეგორიის საგზური"],
    ['1 500 ₾', "სპეც. კატეგორიის საგზური"],
    ['2 000 ₾', "სპეც. კატეგორიის საგზური"],
    ['3 000 ₾', "სპეც. კატეგორიის საგზური"],
    ['100 ₾', "სპეც. კატეგორიის საგზური"],
    ['600 ₾', "სპეც. კატეგორიის საგზური"],
    ['7 000 ₾', "სპეც. კატეგორიის საგზური"]]

    const info2 = [[travel, "The Festival in Malta-ს საგზური"],
    [ticket, "სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური"],
    [masterC, "ტექნიკის მაღაზიის ვაუჩერი"],]


    return (
        <>
        <div className="T1S1">
            <span className="lhead">ჰოლდემის TOP20 ლიდერბორდი</span> <img src={exampleIcon} alt="" srcset="" />
        </div>
        <div className="mainseccont">
            <div className="sec t1M">
                <div className="sect1top">
                    <span>ადგილი</span>
                    <span>ვაუჩერი</span>
                    <span>პრიზი</span>
                </div>
                <div className="sect1bot">
                    {info1.map((obj, i)=>{
                               return <Sect1 key={i} num={i+1} big={obj[0]} def={obj[1]}/>
                        })
                    }
                </div>
            </div>
            {/* <FontAwesomeIcon icon={faMasterCardCreditCard} /> */}
            <div className="sect2M">
                {
                    info2.map((obj, i)=>{
                        return <Sect2 key={i} sr={obj[0]} tx={obj[1]}/>
                    })
                }
            </div>


        </div>
        </>
    )
}
