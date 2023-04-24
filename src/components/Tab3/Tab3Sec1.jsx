import Sect2 from "../Tab1/Sect2"


export default function Tab3Sec1(props){

    return(
        <div className="Tab3Sec1">
                            <div className="TopH">
                <div className="headl"></div>
                <span>A კატეგორიის საგზურში შედის</span>
            </div>
            <div className="Tab3C">
                {props.ar.map((obj, i)=>{
                    return <Sect2 key={i} sr={obj[0]} sh={obj[1]} tx={obj[2]}/>
                })}
            </div>
        </div>
    )
}
