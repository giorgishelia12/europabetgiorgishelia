import tick from "../../assets/poker-item-1-ticket-icon.png"

export default function Smlcrd(){
    return(
        <div className="Smlcrd">
            <div className="shrink shrnkbs">
                <div className="shrBK">

            <div className="smlcrdTxtl ND">
                <span className="smlcrdBGtx">“Cashgame Highrollers” -</span>
                <span className="smlcrdsmltxt BG">A კატეგორიის 1 საგზური</span>
                <span className="smlcrdsmltxt BG">B კატეგორიის 1 საგზური</span>

            </div>
            <div className="smlcrdimg">
                <div className="topmv">
                <img src={tick} alt="" />
                </div>
            </div>
                </div>
            <span className="smlcrdHGtxt">ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით.</span>
            </div>

        </div>
    )
}
