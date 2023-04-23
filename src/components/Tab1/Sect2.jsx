

export default function Sect2(props){
    return (
        <div className="Sect2">
            <div className="orleft">
            </div>
            <div className="orRight">
                <img src={props.sr} alt="" />
                <span className="orSpan">{props.tx}</span>
            </div>
        </div>
    )
}
