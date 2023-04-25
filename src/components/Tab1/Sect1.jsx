export default function Sect1(props){

    return(
        <div className="Sect1">
            <span className="bigS">{props.num}</span>
            <span className="def" style={{display: props.sr ? "none" : "block" }}>{props.big}</span>
            <span className={`orSpan ${props.sr ? "only" : ""}`}> {props.def}</span>
        </div>
    )
}
