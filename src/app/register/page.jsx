
'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { userRegister } from '@/APIs/users/users'
// import { ToastContainer, toast } from 'react-toastify'


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (name === '' || email === '' || password === '') {
            // toast.error("Fill all fields")
            return
        }

        if (password.length < 6) {
            // toast.error("Password must be at least 6 characters")
            return
        }

        try {
            console.log("Registering the user start");
            console.log(name, email, password)

            const data = {
                name,
                email,
                password
            }

            const res= await userRegister(data)
            console.log({res})

            if (res.ok) {
                console.log("Successfully registered the user")
                // toast.success("Successfully registered the user")
                //   setTimeout(() => {
                //       signIn()
                //   }, 1500)
                return
            } else {
                // toast.error("Error occured while registering")
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section className="bg-gray-100 max-w-screen-sm m-auto p-8 flex flex-col align-center justify-center rounded-md">
            <h1 className="mb-4 w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl">
                Register
            </h1>

            <div className="flex flex-col w-full px-4 py-8 bg-white rounded-md shadow sm:px-6 md:px-8 lg:px-10">
                <div className="self-center text-xl font-light text-gray-600 sm:text-2xl ">
                    Join US!
                </div>
                <div className="mt-8">
                    <form onSubmit={handleSubmit}>

                    <div className="flex flex-col mb-6">
                            <div className="flex">
                                <input onChange={(e) => setName(e.target.value)} type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Name" />
                            </div>
                        </div>

                        <div className="mb-2">
                            <div className="flex">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
                            </div>
                        </div>
                       
                        <div className="flex flex-col mb-6">
                            <div className="flex">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button className="py-2 px-4  bg-primary hover:bg-blue-700 focus:ring-purple-500 focus:ring-offset-purple-200 hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <a href="/login" target="_blank" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700">
                        <span className="ml-2">
                            Already have an account?
                        </span>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Register