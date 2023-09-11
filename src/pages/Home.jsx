import Heder from "../components/Heder/Heder";
import Todolist from "../components/Todolist/Todolist";

const Home=()=>{
return (
    <>
    <Heder/>
    <h2 style={{margin:'20px 0'}}>To-Do App</h2>
    <Todolist/>
    </>
)
}

export default Home;