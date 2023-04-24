

export default function Sect2(props){
    return (
        <div className="Sect2">
            <div className="orleft">
            </div>
            <div className="orRight">

                <img style={{display: !props.sr ? "none" : "block" }}  src={props.sr} alt="" />
                <span className={`orSpan ${!props.sr ? "propsW" : ""}`}>{props.tx}</span>
            </div>
        </div>
    )
}
