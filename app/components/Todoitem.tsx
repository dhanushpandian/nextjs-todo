import React from 'react'
type Todoitemprops={
    id:string
    title:string
    complete:boolean
}
export  function Todoitem({id,title,complete}:Todoitemprops) {
  return (
   <li className='flex gap-1 items-center'>
    <input id={id} type="checkbox" className='cursor-pointer peer'/>
    <label htmlfor-={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
   </li>
  )
}
