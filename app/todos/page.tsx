import axios from "axios"
import { cookies } from "next/headers";
import Link from "next/link";
import TodoCard from "../components/Card";

export default async function getTodos() {
    const cookie = cookies();
    const cookieHeader = (await cookie).toString();
    const todos = await axios.get("http://localhost:3000/api/v1/getTodo",{
            headers: {
                cookie: cookieHeader
            },
            // withCredentials: true
        });
    return (
        <div>
            <div className="p-2 border-b">
                <div className="flex justify-self-end gap-4">
                    <div className="bg-purple-600 p-2 rounded-xl w-32 cursor-pointer m-4 flex justify-center"><Link href={'/createTodo'}>Add Todo</Link></div>
                    <div className="bg-purple-600 p-2 rounded-xl w-32 cursor-pointer m-4 flex justify-center"><Link href={'/api/auth/signin'}>Logout</Link></div>
                </div>
            </div>
            <div className="p-4 flex gap-8 flex-wrap">
                {todos.data.todos.length !== 0 ? todos.data.todos.map((todo) => (
                    <TodoCard id={todo.id} title={todo.title} description={todo.description} done={todo.done}/>
                )) : <div className="items-self-center">NO TODOS</div>}
            </div>
            
        </div>
    )
}