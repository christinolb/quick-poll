'use client'
import { userData1 } from "./userData";
import Table from "./Table";
import Title from "./Title";
import { useState, useEffect } from "react";

export default function Submitted() {
    
    const [ data, setData ] = useState([])

    useEffect(() => {
        setData(userData1)
    } ,[])
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday']
    return(
        <>
            <Title title={"Title"}/>

            <h1 className="text-[4.5rem] text-center text-sky-500 mt-[6rem]">Submitted!</h1>

            <div className="flex justify-center mt-[5rem] mx-[4rem] ">
                
                <div className="w-1/2">
                    <h1 className="text-2xl text-center">Results</h1>                  
                    <Table/>
                </div>

            </div>
        
        </>
    )
}
                    /**<div className="grid grid-flow-row border border-black m-2 p2">
                        {
                            userData1.map((day, index) =>
                                <div className='grid grid-cols-5 even:bg-sky-400 odd:bg-white'>
                                    <div className="col-span-1 min-h-[2rem]" key={index}>
                                        {day}
                                    </div>

                                    <div className="col-span-4 min-h-[2rem]" key={index}>
                                        {userData1.map((data, index) =>
                                            <p key={index}>{data.name}: </p>
                                        )}
                                    </div>
                                </div>
                            )
                        }
                    </div>*/