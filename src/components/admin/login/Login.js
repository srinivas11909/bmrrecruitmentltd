//"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
//import { signIn} from "@/auth";
import { dbConnectForLogin } from "@/lib/actions";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const formData = new FormData(e.currentTarget);
        const response = await dbConnectForLogin(formData);

            if (!!response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                alert("Sucessfully logged in")
                //router.push("/admin");
                window.location.reload()
            }
        } catch (e) {
            console.error(e);
            setError("Check your Credentials");
        }

      //   const result = await signIn("credentials", {
      //       username,
      //       password,
      //       redirect: false,
      //  });
      
          // if (result.ok) {
          //   router.push('/admin');
          // } else {
          //   // Handle sign-in error
          //   alert("Enter uname && pwd")
          //   console.log(result.error);
          // }
        // const res = await fetch("/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ username, password }),
        // });
    
        // if (res.ok) {
        //   router.push("/admin");
        // } else {
        //   alert("Login failed");
        // }
      };
    return <>
        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                <h3 className="text-xl font-semibold">Sign in</h3>
                <div className="text-red-700">{error}</div>
            </div>
            <form className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="block text-xs text-gray-600 uppercase">username</label>
                        <input type="text" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm" placeholder="Enter user name" name="username" value={username}
        onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="block text-xs text-gray-600 uppercase" htmlFor="password">Password</label>
                        <input type="password" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm" placeholder="Enter your Password" name="password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                       <div className="grid">
                         <button className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none bg-indigo-500 text-white hover:bg-indigo-600">Login</button>
                       </div>
                    </div>

                </form>   
        </div>
      </>
}