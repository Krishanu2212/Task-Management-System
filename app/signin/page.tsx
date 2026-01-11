"use client"
import { useRef } from "react";
import prisma from "../lib/db"
import axios from "axios";


export default function SignIn() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    async function send() {
        const response = await axios.post("http://localhost:3000/api/v1/signin", {
            username: usernameRef.current?.value,
            password: passwordRef.current?.value
        });
        if(response) {
            localStorage.setItem('id', response.data.id);
        }
    }
    
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="border border-white rounded-xl flex flex-col justify-center items-center p-4 gap-4">
                <div>SignIn Page</div>
                <div className="flex flex-col gap-4">
                    <input ref={usernameRef} className="w-72 h-12 p-4 rounded-md bg-gray-500" type="text" placeholder="Enter username..."/>
                    <input ref={passwordRef} className="w-72 h-12 p-4 rounded-md bg-gray-500" type="password" placeholder="Enter password..."/>
                    <button onClick={send} className="bg-gray-700 rounded-xl p-2 cursor-pointer">SignIn</button>
                </div>
            </div>
        </div>
    )
}