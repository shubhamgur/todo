const Bottan=({clickevent,isdisable,btntext,btnclass})=>{
return(
    <button onClick={clickevent} disabled={isdisable} className={btnclass}>{btntext}</button>
)
}

export default Bottan;