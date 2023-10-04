'use client'

import { useState } from "react"
import Title from "./Title"

export default function PollInstance(){
    //will be replaced with db values
    const date1 = new Date("November 17, 1995 03:24:00")
    const [ title, setTitle ] = useState("Title")
    const [ date, setDate ] = useState()
    const [ month, setMonth ] = useState()
    const [ hour, setHour ] = useState()
    const [ minute, setMinute ] = useState()
    const [ day, setDay ] = useState()
    const [ idealLength, setIdealLength ] = useState("")

    return(
        <>
    
            <Title title={title}/>
            <div className="mt-[5rem] flex flex-row justify-center border border-black">
                <form>
                    <div className="py-5">
                        <label
                            className="pr-2"
                            htmlFor="name"
                        >Name: 
                        </label>
                        <input 
                            className="border border-black"
                            type="text"
                        />
                    </div>

                    <div className="grid grid-flow-col gap-8">
                        <label
                            className=""
                            htmlFor="date"
                        >Date: 
                        </label>
                        <input
                            className=""
                            type="date"
                            id="date"
                        />

                        <label
                            className=""
                            htmlFor="time"
                        >Start: 
                        </label>
                        <input
                            className=""
                            type="time"
                        />

                        <label
                            className=""
                            htmlFor="time"
                        >End: 
                        </label>
                        <input
                            className=""
                            type="time"
                        />

                        <label
                            className=""
                            htmlFor="time"
                        >Ideal Length: 
                        </label>
                        <input
                            className="w-20 border-b border-black text-center"
                            type="number"
                            max={60}
                        />
                        Minutes
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-gray-400 mt-[10rem] mb-[4rem] px-6 py-3 text-white"
                            type="button"
                            onClick={""}
                        >Add New Slot
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <button
                            className="bg-sky-500 text-white  px-6 py-3"
                            type="submit"
                        >Submit Availability
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}