import Link from 'next/link'
import { title } from 'process';
import React from 'react'
import { prisma } from '../db';
import { redirect } from 'next/navigation';

async function createtodo(data:FormData){
  "use server";
  console.log(data);
  const title=data.get("title")?.valueOf();
  if(typeof title!=="string"||title.length===0){
    throw new Error("invalid Title");
  }
  await prisma.todo.create({data:{title,complete:false}});
  redirect("/");
}

const page = () => {
  return (
  <>
      <header className="flex justify-between items-center mb-4">
      <h1 className='text-2xl'>Add New Todo </h1>
      </header>
      <form className='flex gap-2 flex-col' action={createtodo}>
        <input type="text" name='title' className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'/>
      
      <br/>
      <div className='flex gap-1 justify-end'>
        <Link href=".." className='border bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 group-focus-within:bg-slate-700 outline-none'>Cancel</Link>
        <button type='submit' className='border bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 group-focus-within:bg-slate-700 outline-none'  >Add</button>
      </div>
      </form>
  </>
  )
}

export default page