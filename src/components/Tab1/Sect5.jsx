export default function Sect5(props){
    const shadow = {
        boxShadow: `0vw -7.8vw 4vw -2vw ${props.cl} inset`
    }
    return(
        <div className="conBn">

        <div className="Sect5">
            <img className="bnr" src={props.bn} alt="" />
            <div className="blurEf" style={shadow}></div>
            <div className="sectBtTxt">
                <span className="bigTS">{props.mn}</span>
                <span className="smlTS">{props.sc}</span>
            </div>
        </div>
        </div>
    )
}
