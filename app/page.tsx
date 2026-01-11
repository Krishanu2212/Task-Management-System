import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-4xl h-screen w-screen">
      ToDo Application
      <div className="flex flex-col justify-center items-center text-xl">
        <Link href={'/signup'}>Go to SignUp Page</Link>
        <Link href={'/signin'}>Go to SignIn Page</Link>
      </div>
    </div>
  );
}
