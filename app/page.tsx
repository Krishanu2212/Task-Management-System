import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col justify-center items-center text-4xl h-screen w-screen gap-8">
      ToDo Application
      <div className="flex justify-center items-center text-xl gap-8">
        <Link href={'/signup'}>SignUp</Link>
        <Link href={'/api/auth/signin'}>SignIn</Link>
        {JSON.stringify(session)}
      </div>
      
    </div>
  )
}

