import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'

const Content = ({values,handleCheck,handleDelete,handleEdit}) => {

  return (
  <main>
     {(values.length) ? (
  <ul>
     {values.map ((item) => (
      <li className="item" key={item.id}>
      <input
          type="checkbox"
          onChange ={() => handleCheck(item.id)}
          checked={item.checked}
      />

      <label 
      style = { (item.checked) ? {textDecoration:'line-through'} : null }
      onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
       <EditIcon
        onClick = {() => handleEdit(item.id)}
        role="button"
        tabIndex="0"
       />
       <DeleteIcon 
       onClick ={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
       />
      </li>
     ))}
    
  </ul>
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
     
