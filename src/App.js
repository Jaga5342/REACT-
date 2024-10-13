import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState} from 'react';
function App() {
  
  const [values,setNew] = useState(
    [
    { id:1,
      checked:true,
      item:"Drawing",
    },
    {id:2,
      checked:false,
      item:"Writing",
    },
    {id:3,
      checked:true,
      item:"Cricket",
   },
   {id:4,
   checked:false,
   item:"Money",
   }

]);
    //For values checking process
    const handleCheck = (id) =>
      {
      const newItems =values.map((item) =>
      item.id ===id ? {...item, checked:!item.checked} : item)
      setNew(newItems) 
      localStorage.setItem("todo-list",JSON.stringify(newItems))
      }
      //For delete 
      const handleDelete =(id) =>
      {
         const newItems =values.filter((item) =>
          item.id !==id)
          setNew(newItems)
          localStorage.setItem("todo-list",JSON.stringify(newItems))
            }  
      //For edit 
      const handleEdit =(id) =>
      {
        const newItems =values.map((item)=>
          item.id === id )
        setNew(newItems)
      }

return (
  <div className="App">
     <Header />
     <Content 
      values ={values}
      
      handleCheck ={handleCheck}
      handleDelete ={handleDelete}
      handleEdit ={handleEdit}
     />
     <Footer 
      length = {values.length}
     />
  </div>
);
}
export default App;

