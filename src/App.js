import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useState,useEffect} from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App() {
  
  const [values,setNew] = useState(JSON.parse(localStorage.getItem('todo-list'))
   );
const [newItem,setNewItem]= useState('')

//search items
const [search,setSearch]=useState ('')
const [editItemId, setEditItemId] = useState(null);


//adding items
const addItem =(item) =>{
  const id =values.length ? values[values.length - 1].id + 1 : 1;
  const  addNewItem ={id ,checked:false,item}
  const listItems =[...values,addNewItem]
  setNew(listItems)
  localStorage.setItem("todo-list",JSON.stringify(listItems))
}
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
      /*const handleEdit =(id) =>
      {
        const newItems =values.map((item)=>
          item.id === id )
        setNew(newItems)
      }

      const handleSubmit = (e) => 
      {
        e.preventDefault();
        
        if(!newItem ) return ;
        console.log(newItem);
        addItem(newItem)
        setNewItem('')
        //addItem

      }*/
     // For edit
  const handleEdit = (id) => {
    const itemToEdit = values.find(item => item.id === id);
    if (itemToEdit) {
      setNewItem(itemToEdit.item); // Set the item text to the input
      setEditItemId(id); // Set the current id to edit
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newItem) return;

    if (editItemId) {
      // Update the existing item
      const updatedItems = values.map(item =>
        item.id === editItemId ? { ...item, item: newItem } : item
      );
      setNew(updatedItems);
      localStorage.setItem("todo-list", JSON.stringify(updatedItems));
      setEditItemId(null); // Reset edit state
    } else {
      // Add new item
      addItem(newItem);
    }

    setNewItem(''); // Clear input
  };


return (
  <div className="App">
     <Header />
     <AddItem 
      newItem ={newItem}
      setNewItem ={setNewItem}
      handleSubmit ={handleSubmit}
     />
     <SearchItem 
      search ={search}
      setSearch ={setSearch}
     /> 
     <Content 
      values ={values.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      
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

