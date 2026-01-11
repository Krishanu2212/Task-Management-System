"use client"
import { useRef } from "react";
import axios from "axios";


export default function SignIn() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    async function send() {
        const response = await axios.post("http://localhost:3000/api/v1/createTodo", {
            title: titleRef.current?.value,
            description: descriptionRef.current?.value,
            userId: localStorage.getItem('id')
        });
        if(response.status === 200) {
            alert(response.data.msg);

        }
    }
    
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="border border-white rounded-xl flex flex-col justify-center items-center p-4 gap-4">
                <div>Create a Todo</div>
                <div className="flex flex-col gap-4">
                    <input ref={titleRef} className="w-72 h-12 p-4 rounded-md bg-gray-500" type="text" placeholder="Enter title..."/>
                    <input ref={descriptionRef} className="w-72 h-12 p-4 rounded-md bg-gray-500" type="text" placeholder="Enter description..."/>
                    <button onClick={send} className="bg-gray-700 rounded-xl p-2 cursor-pointer">Create</button>
                </div>
            </div>
        </div>
    )
}