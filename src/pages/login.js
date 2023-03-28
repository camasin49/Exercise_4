import {useState} from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});
    const [showDialog, setShowDialog] = useState(false);
    const router= useRouter();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!username) {
             errors.username = "Username is required!";
            }
            if (!password) {
                errors.password = "Password is required";
            }
            if (Object.keys(errors).length === 0) {
                if (username === "holden" && password === "holden") {
                    router.push("./board");
                  } else {
                    setShowDialog(true);
                  }
            } else {
                setErrors(errors);
            }
        };
    

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
            <div>
                <div className="flex justify-center items-center pb-10">
                    <h1 className="font-mono font-bold text-4xl text-gray-100">Holden E. Montajes</h1>
                </div>
                <div className="relative w-[380px] h-[420px] bg-gray-800 rounded-lg z-10 p-5 overflow-hidden">
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-blue-500 via-yellow-500 
               to-transparent-top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-lime-500 via-red-500
               to-transparent-top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"> </div>
                <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5">  
                 <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold font-mono text-gray-100 text-center mt-3 mb-5">Log in</h2>
                    <div className="relative flex flex-col mb-2">
                        <input type="text" 
                            id="username"
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`relative z-10 border-0 border-b-2 
                          border-blue-500 h-10 bg-transparent text-gray-100 font-mono outline-none px-2 peer 
                            ${ errors.username ? "border-red-500" : "border-gray-300"}`}
                        />
                        <i className="bg-blue-500 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100
                        text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-100 peer-focus:scale-75 peer-focus:-translate-y-8">Username</label>
                    </div>
                    <div>
                        {errors.username && (<p className="text-red-500 text-sm mt-1">{errors.username}</p>)}
                    </div>
                    
                    <div className="relative flex flex-col mt-10 mb-2">
                        <input type="password"
                            id="password"
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`relative z-10 border-0 border-b-2 
                          border-blue-500 h-10 bg-transparent text-gray-100 font-mono outline-none px-2 peer
                            ${errors.password ? "border-red-500" : "border-gray-300"}`}
                        />
                        <i className="bg-blue-500 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100
                        text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-100 peer-focus:scale-75 peer-focus:-translate-y-8">Password</label>
                    </div>
                    <div>
                        {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password}</p>)}
                    </div>
                    
                    <button type="submit"
                        className="py-3 mt-10 font-mono text-gray-100 bg-blu-500 w-full rounded hover:bg-blue-600
                        hover-scale-105 duration-300">LOGIN</button>
                    
                    <h2 className="flex justify-center items-center mt-10 text-sm text-gray-100 font-mono">
                        Don't have an account?
                        <Link 
                            className="text-blue-500 ml-1" 
                            href="./signup">Sign up</Link>
                    </h2>

                    {showDialog && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-gray-900 p-4 rounded-md">
                                <p className="text-red-500 font-medium mb-2">Incorrect username or password.</p>
                                <button className="bg-gray-400 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-600"
                                    onClick={() => setShowDialog(false)}
                                >OK
                                </button>   
                            </div>
                        </div>
                    )}
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}