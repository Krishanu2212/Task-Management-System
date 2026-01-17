"use client"

import DeleteTodo from "./DeleteTodo"

interface Todo {
    id: string,
    title: string,
    description: string,
    done: boolean
}

export default function TodoCard(props: Todo) {
    return (
        <div className="border rounded-xl min-w-52">
            <div className="border-b p-2 items-center flex justify-between">
                {props.title}
                <div className="cursor-pointer">
                    <DeleteTodo id={props.id}/>
                </div>
            </div>
            <div className="p-4">
                {props.description}
            </div>
            <div className="p-2 border-t border-dashed">
                {props.done ? "Done" : "Not Done"}
            </div>
        </div>
    )
}