
export default function Sect5(props){

    return(
        <div className="conBn">

        <div className="Sect5">
            <img className="bnr" src={props.bn} alt="" />
            <div className="blurEf" style={{color: `${props.cl}`}}></div>
            <div className="sectBtTxt">
                <span className="bigTS">{props.mn}</span>
                <span className="smlTS">{props.sc}</span>
            </div>
        </div>
        </div>
    )
}
