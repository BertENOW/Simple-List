import React from 'react'


const ListItem = (props)=>{
    return(
        <div className="flex justify-center">
            <div className=' h2 w-third ba br2 ma1 pl2 flex items-center justify-between'>
            {props.item}
            <button className='h2' id={props.item} onClick={props.delete}>X</button>
            </div>
        </div>
        
    )
}

export default ListItem