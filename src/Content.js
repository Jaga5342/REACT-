
import React from 'react'
import ItemList from './ItemList';

const Content = ({values,handleCheck,handleDelete,handleEdit,handleSave}) => {

  return (
  <main>
     {(values.length) ? (
       <ItemList 
          values ={values}
         handleCheck ={handleCheck}
         handleDelete ={handleDelete}
         handleEdit ={handleEdit}
         handleSave ={handleSave}
       />
      ) :
     (
     <p style={{ marginTop:'10rem'}}>The List is EMPTY</p>
     )
     }
  </main>
  )
}
export default Content


/*function handlename()
{
  
    const name=["Stone","Paper","Scissor"];
    const a=Math.floor(Math.random()*3);
    setNew(name[a])
}



  return (
    <div>
    <p >Stone vs {values}</p>
      <button onClick={handlename}>Magic</button>
      </div>
  )
}
*/
/*
const change = (e)=>
  {
    console.log(e.target.innerHTML);
  }
  const change1 = (value)=>
    {
      console.log(`Vetri ellam sernthu varum ${value}`);
    }



    const [old,setNew] =useState(100);

function increase()
{
 setNew(preold => preold + 1)
}
function decrease()
{
  setNew(preold => preold - 1)
}
    
const [name,New] = useState("Stone");

      */
     
