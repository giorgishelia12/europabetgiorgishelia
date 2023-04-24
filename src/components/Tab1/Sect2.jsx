

export default function Sect2(props){
    return (
        <div className={`Sect2 ${ props.sh ? "Sect2alt" : ""}`}>
            <div style={{display: props.sh ? "none": "block"}} className="orleft">
            </div>
            <div className="orRight">

                <img style={{display: !props.sr ? "none" : "block" }}  src={props.sr} alt="" />
                <span className={`orSpan ${props.sh ? "propsW" : ""}`}>{props.tx}</span>
            </div>
        </div>
    )
}
