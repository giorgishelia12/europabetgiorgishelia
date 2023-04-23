export default function Sect1(props){
    console.log(props.num);
    return(
        <div className="Sect1">
            <span className="bigS">{props.num}</span>
            <span className="def">{props.big}</span>
            <span className="cat">{props.def}</span>
        </div>
    )
}
