import Tab2Sec2min from "./Tab2Sec2min"
import Tab2Sec2big from "./Tab2Sec2big"
export default function Tab2Sec2(){
    return(
        <div className="Tab2Sec2">
            <div className="toprow">
                <Tab2Sec2min />
                <Tab2Sec2min />
            </div>
            <div className="botrow">
                <Tab2Sec2big/>
            </div>
            <div className="foot scft">
                    <span>* სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის მისაღებად.</span>
                </div>
        </div>
    )
}
