export default function Tabs(set){

    function tabEf(el){
        const al = document.querySelectorAll('.bt')[el]

        if(!al.classList.contains("ActiveBt")){
            document.querySelectorAll('.bt').forEach((e)=>{
                e.classList.remove("ActiveBt")
            })
                al.classList.add("ActiveBt")
            set.set(el+1)

        }
    }


    return(
        <div className="Tabs">
            <button className="bt ActiveBt L" onClick={e =>{tabEf(0)}}><span> 1 - 29 აპრილი <br /><strong>Cash Games</strong></span></button>
            <button className="bt" onClick={e =>{tabEf(1)}}><span>13 - 29 აპრილი<br /> <strong>Spring Series</strong></span></button>
            <button className="bt R" onClick={e =>{tabEf(2)}}><span>30 აპრილი <br /><strong>Final Stage</strong></span></button>
        </div>
    )
}
