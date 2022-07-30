import React from 'react'
import ListItem from './List_Item'

const List= (props)=>{
    
    const ListComponent = props.list.map((item, i)=>{

        return <ListItem key ={i} item={item} delete={props.delete}/>
    });

    return(
        <div>
            {ListComponent}
        </div>
        
    )
}

export default List