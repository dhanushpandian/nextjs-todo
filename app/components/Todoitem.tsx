"use client"
import React from 'react'
type Todoitemprops={
    id:string
    title:string
    complete:boolean
    toggletodo:(id:string,complete:boolean)=>void
}
export  function Todoitem({id,title,complete , toggletodo}:Todoitemprops) {
  return (
   <li className='flex gap-1 items-center'>
    <input id={id} type="checkbox" className='cursor-pointer peer' defaultChecked={complete} onChange={e=>toggletodo(id,e.target.checked)}/>
    <label htmlfor-={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
   </li>
  )
}
