'use client'

import { useState } from "react"
import Title from "./Title.js"


export default function CreatePoll(){
    const [ title, setTitle ] = useState("")

    return(
        <>
            
            <div className="">
                <Title title="Quick Poll"/>
                <div className="flex justify-center m-3">
                    <p className="w-1/4 text-center">
                    Quickly create and launch a poll to find the best day and time of the week for everyone. Great for meetings, hangouts events and more!
                    </p>
                </div>
                <form className="flex flex-col">
                    <div>
                    <label
                        className="text-[2rem] mt-9 mb-11 justify-center flex"
                        htmlFor="title">Enter Poll Title:</label>
                    </div>

                    <div className="justify-center flex">
                    <input
                        required
                        placeholder="Title"
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-black w-[20rem] h-20 m-2 p-2 bg-gray-400 text-white text-2xl placeholder:text-white"
                        />
                    </div>

                    <div className="justify-center flex">
                    <button
                        type="submit"
                        className="px-5 py-3 m-4 bg-sky-500 text-white text-xl focus:bg-sky-400"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}