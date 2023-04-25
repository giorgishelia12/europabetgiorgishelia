import tick from "../../assets/poker-item-1-ticket-icon.png"

export default function Smlcrd(){
    return(
        <div className="Smlcrd sm">
            <div className="shrink">
            <div className="smlcrdTxtl">
                <span className="smlcrdBGtx">“Cashgame Highrollers” -</span>
                <span className="smlcrdsmltxt">1 საგზური</span>
            </div>
            <div className="smlcrdimg">
                <div className="topmv">
                <img src={tick} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}
