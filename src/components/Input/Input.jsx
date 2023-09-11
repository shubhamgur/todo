const Input=({inputhandler,val,enterkey})=>{
return(
    <input type='text' onChange={inputhandler} value={val} onKeyUp={enterkey}/>
)
}

export default Input;