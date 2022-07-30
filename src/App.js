import React, {useState} from 'react'
import List from './components/List';
import ListItem from './components/List_Item';

function App() {

  var [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const setInputValue = (event)=>{
    setInput(event.target.value);
  }

  const appendItems = (event)=>{
    if (input.length>0 && event.key === "Enter")
    { 
      items.push(input)
      setItems(items);
      setInput("")
      event.target.value="";
      console.log(items);
    }    
  }

  const appendItemsButton = () => {
    if(input.length>0 && input[1] !==' '){
      items.push(input);
      setItems(items);
      setInput("")
      myRef.current.value = "";
       console.log(myRef.current.value);
    }
  }
  const deleteItem = (event)=>{
      items = items.filter(item=> item.toLowerCase() !== event.target.id.toLowerCase())
      setItems(items)
      console.log(items)
  }

  const myRef = React.createRef();

  return (
    <div className=''>
      <div className='flex flex-column items-center'>
        <h2>Simple list App</h2>
        <p>Type an item into the input and press enter to add them</p>
      </div>
      <div className='flex justify-center '>
      <input className=' flex w-third br2 h2' type="search" ref= {myRef} placeholder='Add list item' onChange={setInputValue} onKeyDown={appendItems}/>
      <button className=' h2' onClick={appendItemsButton}>Add</button>
      </div>
      <div>
      <List list={items} delete={deleteItem}/>
      </div>
    </div>
    
  );
}

export default App;
