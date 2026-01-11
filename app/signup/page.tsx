"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react"

export default function signup() {
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const router = useRouter();

    async function send() {
        const response = await axios.post("http://localhost:3000/api/v1/signup", {
            name: nameRef.current?.value,
            username: usernameRef.current?.value,
            password: passwordRef.current?.value,
        })
        router.push('signin');
    }
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="border border-white rounded-xl flex flex-col justify-center items-center p-4 gap-4">
                <div>SignUp Page</div>
                <div className="flex flex-col gap-4">
                    <input ref={nameRef} className="w-72 h-12 p-4 rounded-md bg-gray-500" type="text" placeholder="Enter name..."/>
                    <input ref={usernameRef} className="w-72 h-12 p-4 rounded-md bg-gray-500" type="text" placeholder="Enter username..."/>
                    <input ref={passwordRef} className="w-72 h-12 p-4 rounded-md bg-gray-500" type="password" placeholder="Enter password..."/>
                    <button onClick={send} className="bg-gray-700 rounded-xl p-2 cursor-pointer">SignUp</button>
                </div>
            </div>
        </div>
    )
}