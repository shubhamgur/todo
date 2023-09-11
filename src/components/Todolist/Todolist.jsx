import { useEffect } from "react";
import { useState } from "react";
import Bottan from "../Botton/Bottan";
import Input from "../Input/Input";
import List from "../List/List";



const Todolist=()=>{
    const [task,setTask]=useState([]);
    const[text,setText]=useState('');
    


useEffect(()=>{
  const p=JSON.parse(localStorage.getItem('too'));
  setTask(p || []);
},[])

useEffect(()=>{
    localStorage.setItem('too',JSON.stringify(task))
},[task])

    const handler=(e)=>{
setText(e.target.value)
    }

    const btnhandler=()=>{
        const trimtext=text.trim();
        if(trimtext){
            const textObj={
                item:trimtext,
                done:false,
                isedit:false,
                editing:trimtext
            }
        setTask([...task,textObj]);
        }
        setText('');
    }

    const donebtn=(e)=>{
const newlist=[...task];
newlist[e].done=true;
setTask(newlist);

    }

    const enterbtn=(e)=>{
        if(e.key==='Enter'){
            btnhandler();
        }
            }

    const deleteBtn=(index)=>{
const list=[...task];
list.splice(index,1);
setTask(list);
            }

    const swappingbtn=(index,finalindex)=>{
        const list=[...task];
        const temp=list[index];
        list[index]=list[finalindex];
        list[finalindex]=temp;
        setTask(list);
    }

    const editbtn=(index)=>{
const list=[...task];
list[index].isedit=true;
setTask(list);
    }

    const cancllbtn=(ind)=>{
        const list=[...task];
        list[ind].editing=list[ind].item;
list[ind].isedit=false;
setTask(list);
    }

const inputchange=(index,value)=>{
    const list=[...task];
    list[index].editing=value;
    setTask(list);
}

const savehandler=(ind)=>{
    const list=[...task];
    const trimediting=list[ind].editing.trim()
    if(trimediting){
    list[ind].item=list[ind].editing;
    list[ind].isedit=false;
    setTask(list);
   }else{
       cancllbtn(ind); 
    }
}

const clerehandler=()=>{
    setTask([])
}

return (
   <> 
<Input inputhandler={handler} val={text} enterkey={enterbtn}/>
<span style={{marginLeft:'20px'}} ><Bottan clickevent={btnhandler} isdisable={!text} btntext='Add to list'/></span>
<span style={{marginLeft:'10px'}}>
<Bottan btntext='Clear the list' clickevent={clerehandler} isdisable={!task.length}/>
</span>
<div style={{marginTop:'20px'}} >
    <List msg={task} 
    doneclick={donebtn} 
    deletehandler={deleteBtn}
    swappingbtn={swappingbtn}
    edithandler={editbtn}
    cancelHandler={cancllbtn}
    inputchange={inputchange}
    savehandler={savehandler}/>
</div>
</> 
)
}

export default Todolist;