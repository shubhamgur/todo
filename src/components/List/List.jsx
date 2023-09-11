import Bottan from "../Botton/Bottan";
import Input from '../Input/Input'
import style from './List.module.css'

const List=({msg,doneclick,deletehandler,swappingbtn,edithandler,cancelHandler,inputchange,savehandler})=>{

    const listItam=msg.map((task,ind)=>
        <li key={ind} className={task.done ? style.btndone:''}>
            {!task.isedit &&(
                <>
<label> {task.item}</label>
<Bottan btntext='Edite' isdisable={task.done} btnclass={style.btn} clickevent={()=>{edithandler(ind)}} />
</>
            )}
            {task.isedit && (  
                <>
                <Input val={task.editing} inputhandler={(e)=>{
                    inputchange(ind,e.target.value)
                }}/> 
                <Bottan btntext='Save' btnclass={style.btn} clickevent={()=>{
                    savehandler(ind)
                }} isdisable={!task.editing.length}/> 
                <Bottan btntext='cancle' btnclass={style.btn} clickevent={()=>{
                    cancelHandler(ind)
                }}/> 
                </>   
            )}
            
            <Bottan btntext='Up' btnclass={style.btn} isdisable={ind===0} clickevent={()=>{swappingbtn(ind,ind-1)}}/>
            <Bottan btntext='Down' btnclass={style.btn} isdisable={ind===msg.length-1} clickevent={()=>{swappingbtn(ind,ind+1)}}/>
        {!task.done && (
            
            <Bottan btntext='Done' btnclass={style.btn} isdisable={task.isedit} clickevent={()=>{
            doneclick(ind)}}  />
            
        )}
        {task.done && (
            <Bottan btntext='Delete' btnclass={style.btn} clickevent={()=>{deletehandler(ind)}}/>
        )}
            </li>
)
   
return(
   <ul  style={{display:'inline-block'}}>
    {listItam}
   </ul> 
)
}

export default List;