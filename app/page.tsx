import Image from "next/image";
import Link from "next/link";
import { prisma } from "./db";
import { Todoitem } from "./components/Todoitem";

function getTodos(){
  return prisma.todo.findMany()
}

export default async function Home() {
  
  //await prisma.todo.create({data:{title:"test",complete:false}})

  //const todos = await prisma.todo.findMany()

  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between items-center mb-4">
      <h1 className="text-6xl">TO DOs</h1>
      <Link href={'/new'} className="border bg-slate-800 px-2 py-1 rounded hover:bg-slate-700 group-focus-within:bg-slate-700 outline-none">new</Link>
      </header>
        <ul className="pl-4 text-2xl	">
          {todos.map(todo=> <Todoitem key={todo.id} {...todo}/>)}
        {/* {todos.map(todo=>(<li key={todo.id}>{todo.title}</li>))} */}
        </ul>
    </>
  );
}
